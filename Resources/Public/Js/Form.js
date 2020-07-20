document.addEventListener("DOMContentLoaded", function() {

    var postInput = document.getElementById('postInput');
    var postPreview = document.getElementById('postPreview');
    var mediaPreview = document.getElementById('mediaPreview');
    var postSubmit = document.getElementById('postSubmit');
    var dropArea = document.getElementById('dropArea');

    var loadMarkdownPreview = function(content){
        var data = {bodytext: content};
        var params = typeof data == 'string' ? data : Object.keys(data).map(
            function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
        ).join('&');
        let url = '?type='+osp['typeNum']['page_markdown_preview'];
        let request = new XMLHttpRequest();
        request.open("POST", url, true);
        request.onreadystatechange = function() {
            if (request.readyState === 4 && request.status == "200") {
                postPreview.innerHTML = request.responseText;
                postPreview.classList.add('py-3');
            }
            else{
                postPreview.innerHTML = '<div class="alert alert-warning">Preview could not be loaded!</div>';
            }
        }
        request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.send(params);
    };

    var preventDefaults = function(e){
        e.preventDefault()
        e.stopPropagation()
    };

    var postFormDragover = function(e){
        e.target.classList.add('bg-dark');
    }

    var previewFile = function (file) {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = function() {
            let img = document.createElement('img')
            img.classList.add('img-fluid')
            img.src = reader.result
            mediaPreview.appendChild(img)
        }
    }

    var handleFiles = function(files){
        for (var i = 0; i < files.length; i++) {
            previewFile(files[i]);
        }
    }

    var postFormDrop = function(e){
        let dt = e.target
        let files = dt.files
        handleFiles(files);
    }

    if(postInput){

        postInput.addEventListener("focusout", function() {
            if(postInput.value.trim() === ''){
                postSubmit.setAttribute('disabled','disabled');
            }
            else{
                postSubmit.removeAttribute('disabled');
                loadMarkdownPreview(postInput.value.trim());
                postSubmit.onclick = function(){
                    postSubmit.innerHTML = '<div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div>';
                };
            }
        });

        if(dropArea){
            ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
              dropArea.addEventListener(eventName, preventDefaults, false)
            })

            dropArea.addEventListener("dragenter",postFormDragover);
            dropArea.addEventListener("drop",postFormDrop,false);
            dropArea.addEventListener("change",postFormDrop,false);
        }

        loadMarkdownPreview(postInput.value.trim());

    }

});
