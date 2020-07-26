document.addEventListener("DOMContentLoaded", function() {

    var postContainer = document.getElementById('post-container');

    if(osp['absRefPrefix'] && postContainer){
        loadList();
    }

    function loadList(){
        let request = new XMLHttpRequest();
        request.open("POST", osp['absRefPrefix']+'?type='+osp['typeNum']['page_posts_list'], true);
        request.onreadystatechange = function() {
            if (request.readyState === 4 && request.status == "200") {
                postContainer.innerHTML = request.responseText;
                refreshFsLightbox();
                refreshGlobal();
            }
            else{
                postContainer.innerHTML = 'Oopps, something went wrong!';
            }
        }
        request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.send();
    }

    // Hack: Change classes of TYPO3 pagination ViewHelper to Bootstrap classes
    var paginations = document.querySelectorAll('.f3-widget-paginator');
    for (var i = 0; i < paginations.length; i++) {
        var paginator = paginations[i];
        paginations[i].classList.add('pagination');
        for (var i = 0; i < paginator.children.length; i++) {
            paginator.children[i].classList.add('page-item');
            if(paginator.children[i].classList.contains('current')){
                let tmp = paginator.children[i].innerHTML;
                paginator.children[i].innerHTML = '<a href="#" class="page-link">'+tmp+'</a>';
                paginator.children[i].classList.remove('current');
                paginator.children[i].classList.add('active');
            }
            else{
                paginator.children[i].children[0].classList.add('page-link');
            }
        }
    }

});
