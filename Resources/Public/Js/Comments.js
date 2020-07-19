document.addEventListener("DOMContentLoaded", function() {

    let commentContainers = document.querySelectorAll('.comment-container');
    commentContainers.forEach((container, i) => {
        loadComments(container.dataset.uid);
    });


    function loadComments(link){
        let request = new XMLHttpRequest();
        request.open("POST", link.href, true);
        request.onreadystatechange = function() {
            if (request.readyState === 4 && request.status == "200") {
                link.href = '#';
                link.innerHTML = JSON.parse(request.responseText)['label'];
            }
            else{
                link.innerHTML = 'Oopps!';
            }
        }
        request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.send();
    }

});
