document.addEventListener("DOMContentLoaded", function() {

    var postContainer = document.getElementById('post-container');

    if(osp['absRefPrefix'] && postContainer){
        loadHome();
    }

    function loadHome(){
        let request = new XMLHttpRequest();
        request.open("POST", osp['absRefPrefix']+'?type=899', true);
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

});
