document.addEventListener("DOMContentLoaded", function() {

    let likeEvent = document.addEventListener('click',function(e){
        if(e.target.classList.contains('like')){
            if(e.target.getAttribute('href') !== '#' && e.target.getAttribute('href') !== '') {
                like(e.target);
            }
            else{
                alert("Nope!");
            }
            e.preventDefault();
        }
    });

    function like(link){
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
