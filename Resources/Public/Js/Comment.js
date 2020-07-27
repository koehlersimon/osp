document.addEventListener("DOMContentLoaded", function() {

    const initComment = function(){
        let commentContainers = document.querySelectorAll('.comment-container');
        commentContainers.forEach((container, i) => {
            if(container.hasAttribute('data-form')){
                let form = document.createElement('div');
                container.appendChild(form);
                commentComponentRequest(form,container.dataset.form);
            }
            if(container.hasAttribute('data-comments')){
                let comments = document.createElement('div');
                container.appendChild(comments);
                commentComponentRequest(comments,container.dataset.comments);
            }
            if(container.hasAttribute('data-form') || container.hasAttribute('data-comments')){
                container.classList.add('border');
            }
        });
    }

    const commentComponentRequest = function(targetObject,dataUrl){
        let request = new XMLHttpRequest();
        request.open("POST", dataUrl, true);
        request.onreadystatechange = function() {
            if (request.readyState === 4 && request.status == "200") {
                targetObject.innerHTML = request.responseText;
            }
            else{
                targetObject.innerHTML = '<div class="alert alert-info">could not load comments</div>';
            }
        }
        request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.send();
    }

    window.initComment = function(){
        initComment();
    }

    initComment();

});
