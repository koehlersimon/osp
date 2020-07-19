<?php
namespace SIMONKOEHLER\Osp\Domain\Model;
use TYPO3\CMS\Extbase\Annotation\ORM\Cascade;

class Post extends \TYPO3\CMS\Extbase\DomainObject\AbstractEntity
{

    /** @var int */
    protected $crdate;

    /**
     * uidext
     *
     * @var int
     */
    protected $uidext = 0;

    /**
     * content
     *
     * @var string
     */
    protected $content = '';

    /**
     * likes
     *
     * @var int
     */
    protected $likes = 0;

    /**
     * owner
     *
     * @var int
     */
    protected $owner = 0;

    /**
     * owner
     *
     * @var string
     */
    protected $ownername = 0;

    /**
     * posttype
     *
     * @var int
     */
    protected $posttype = 0;

    /**
     * feGroup
     *
     * @var string
     */
    protected $feGroup = '';

    /**
     * media
     *
     * @var \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\TYPO3\CMS\Extbase\Domain\Model\FileReference>
     * @Cascade remove
     */
    protected $media = null;


    /**
     * Returns the uidext
     *
     * @return int $uidext
     */
    public function getUidext()
    {
        return $this->uidext;
    }

    /**
     * Sets the uidext
     *
     * @param int $uidext
     * @return void
     */
    public function setUidext($uidext)
    {
        $this->uidext = $uidext;
    }


    /**
     * Returns the media
     *
     * @return \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\TYPO3\CMS\Extbase\Domain\Model\FileReference> $media
     */
    public function getMedia()
    {
        return $this->media;
    }

    /**
    * Returns the crdate
    *
    * @return int
    */
    public function getCrdate() {
        return $this->crdate;
    }

    /**
     * Returns the owner
     *
     * @return int $owner
     */
    public function getOwner()
    {
        return $this->owner;
    }

    /**
     * Sets the owner
     *
     * @param int $owner
     * @return void
     */
    public function setOwner($owner)
    {
        $this->owner = $owner;
    }

    /**
     * Returns the content
     *
     * @return string $content
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * Sets the content
     *
     * @param string $content
     * @return void
     */
    public function setContent($content)
    {
        $this->content = $content;
    }

    /**
     * Returns the likes
     *
     * @return int $likes
     */
    public function getLikes()
    {
        return $this->likes;
    }

    /**
     * Sets the likes
     *
     * @param int $likes
     * @return void
     */
    public function setLikes($likes)
    {
        $this->likes = $likes;
    }


    /**
     * Returns the posttype
     *
     * @return int $posttype
     */
    public function getPosttype()
    {
        return $this->posttype;
    }

    /**
     * Sets the posttype
     *
     * @param int $posttype
     * @return void
     */
    public function setPosttype($posttype)
    {
        $this->posttype = $posttype;
    }

    /**
     * Returns the feGroup
     *
     * @return string $feGroup
     */
    public function getFeGroup()
    {
        return $this->feGroup;
    }

    /**
     * Sets the feGroup
     *
     * @param string $feGroup
     * @return void
     */
    public function setFeGroup($feGroup)
    {
        $this->feGroup = $feGroup;
    }

    /**
     * Returns the ownername
     *
     * @return string $ownername
     */
    public function getOwnername()
    {
        return $this->ownername;
    }

    /**
     * Sets the ownername
     *
     * @param string $ownername
     * @return void
     */
    public function setOwnername($ownername)
    {
        $this->ownername = $ownername;
    }
}
