<?php
namespace SIMONKOEHLER\Osp\Domain\Repository;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Database\ConnectionPool;
use TYPO3\CMS\Core\Resource\ResourceFactory;
use TYPO3\CMS\Core\DataHandling\DataHandler;

class PostRepository extends \TYPO3\CMS\Extbase\Persistence\Repository{

    // Order by BE sorting
	protected $defaultOrderings = array(
		'crdate' => \TYPO3\CMS\Extbase\Persistence\QueryInterface::ORDER_DESCENDING
	);

	// Moves the file from $tmpName to the default storage of the user and names it like $fileName
	public function createFileObject($tmpName,$fileName,$storage){

		// Get instance of the ResourceFactory class
		$resourceFactory = ResourceFactory::getInstance();

		// If no storage
		if(!$storage){
			$storageObject = $resourceFactory->getDefaultStorage();
		}
		else{
			$storageObject = $resourceFactory->getStorageObject($storage);
		}

		// Add the file
		$newFile = $storageObject->addFile(
			  $tmpName,
			  $storageObject->getRootLevelFolder(),
			  $fileName
		);
		// Send the file object back to the controller
		return $newFile;

	}

	/*
	* Creates a file reference for any kind of record!
	*/
	public function createFileReference($file,$record,$pid,$tablenames,$fieldname){

		// Create sys_refindex entry manually
		$queryBuilder = GeneralUtility::makeInstance(ConnectionPool::class)->getQueryBuilderForTable('sys_refindex');
		$affectedRows = $queryBuilder
		   ->insert('sys_refindex')
		   ->values([
				'hash' => md5($file),
				'tablename' => $tablenames,
				'recuid' => $record,
				'ref_table' => 'sys_file_reference',
				'ref_uid' => $file,
				'field' => $fieldname,
		   ])
		   ->execute();

		// Create sys_file_reference entry manually
		$queryBuilder = GeneralUtility::makeInstance(ConnectionPool::class)->getQueryBuilderForTable('sys_file_reference');
   		$affectedRows = $queryBuilder
   		   ->insert('sys_file_reference')
   		   ->values([
   		      'pid' => $pid,
   		      'tstamp' => time(),
   		      'crdate' => time(),
   		      'uid_local' => $file,
   		      'uid_foreign' => $record,
   		      'tablenames' => $tablenames,
   		      'fieldname' => $fieldname,
			  'table_local' => 'sys_file',
   		   ])
   		   ->execute();

	}

}
