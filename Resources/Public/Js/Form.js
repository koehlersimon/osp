document.addEventListener("DOMContentLoaded", function() {

    var postInput = document.getElementById('postInput');
    var postPreview = document.getElementById('postPreview');
    var mediaPreview = document.getElementById('mediaPreview');
    var postSubmit = document.getElementById('postSubmit');
    var dropArea = document.getElementById('dropArea');

    if(postInput){
        postInput.addEventListener("focusout", function() {
            if(postInput.value.trim() === ''){
                postSubmit.setAttribute('disabled','disabled');
            }
            else{
                postSubmit.removeAttribute('disabled');
                postPreview.innerHTML = '<p class="lead">' + postInput.value.trim() + '</p>';
                loadMarkdownPreview(postInput.value.trim());
                postSubmit.onclick = function(){
                    postSubmit.innerHTML = '<div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div>';
                };
            }
        });

        ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
          dropArea.addEventListener(eventName, preventDefaults, false)
        })

        dropArea.addEventListener("dragenter",postFormDragover);
        dropArea.addEventListener("drop",postFormDrop,false);
        dropArea.addEventListener("change",postFormDrop,false);

    }

    function preventDefaults(e){
        e.preventDefault()
        e.stopPropagation()
    }

    function postFormDragover(e){
        e.target.classList.add('bg-dark');
    }

    function postFormDrop(e){
        let dt = e.target
        let files = dt.files
        console.log(files);
        handleFiles(files);
    }

    function previewFile(file) {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = function() {
            let img = document.createElement('img')
            img.classList.add('img-fluid')
            img.src = reader.result
            mediaPreview.appendChild(img)
        }
    }

    function handleFiles(files){
        for (var i = 0; i < files.length; i++) {
            previewFile(files[i]);
        }

    }

    function loadMarkdownPreview(content){
        var data = {bodytext: content};
        var params = typeof data == 'string' ? data : Object.keys(data).map(
            function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
        ).join('&');
        let url = '?type=897';
        let request = new XMLHttpRequest();
        request.open("POST", url, true);
        request.onreadystatechange = function() {
            if (request.readyState === 4 && request.status == "200") {
                postPreview.innerHTML = request.responseText;
            }
            else{
                postPreview.innerHTML = '<div class="alert alert-warning">Preview could not be loaded!</div>';
            }
        }
        request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.send(params);
    }

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })

});
