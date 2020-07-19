document.addEventListener("DOMContentLoaded", function() {

    /*
    * Loads the TYPO3 Ajax URL that must begiven in the data attibute
    * of the target element for instance data-url="https://opensourceproject.org"
    */
    var loadExternalPost = function(el){
        let request = new XMLHttpRequest();
        request.open("POST", el.dataset.url, true);
        request.onreadystatechange = function() {
            if (request.readyState === 4 && request.status == "200") {
                el.querySelector('.content').innerHTML = request.responseText;
            }
            else{
                el.querySelector('.content').innerHTML = 'Oopps!';
            }
            el.querySelector('.content').classList.add('loaded');
        }
        request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.send();
    }

    /*
    * Detecting all external posts in the DOM and check if they are visible in the viewport.
    * If a post is visible AND the target container and does NOT have
    * the class 'loaded', load the external post.
    */
    var checkExternalPosts = function() {
        var externalPosts = document.querySelectorAll('[data-posttype="2"]');
        externalPosts.forEach((post, i) => {
            if(isInViewport(post) && !post.querySelector('.content').classList.contains('loaded')){
                loadExternalPost(post);
            }
        });
    };

    /*
    * Checks if an element is inside of the viewport
    */
    var isInViewport = function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    /*!
     * Run a callback function after scrolling has stopped
     * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
     * @param  {Function} callback The function to run after scrolling
     */
    var scrollStop = function(callback) {
    	if (!callback || typeof callback !== 'function') return;
    	var isScrolling;
    	window.addEventListener('scroll', function (event) {
    		window.clearTimeout(isScrolling);
    		isScrolling = setTimeout(function() {
    			callback();
    		}, 66);
    	}, false);
    };

    /*
    * Function to resize HTML textareas
    */
    var autoResizeTextfields = function(el,triggerMethod){
        let offset = el.offsetHeight - el.clientHeight;
        el.style.boxSizing = 'border-box';
        el.style.height = 'auto';
        el.style.height = el.scrollHeight + offset + 'px';
        el.removeEventListener(triggerMethod,autoResizeTextfields.bind());
    }

    /*
    * Checking external posts status on scroll stop
    */
    scrollStop(function () {
        checkExternalPosts();
    });

    /*
    * Function attached to the window, to refresh things here from other files
    */
    window.refreshGlobal = function(){
        checkExternalPosts();
    }

    /*
    * Attach event listeners for resizing to all textareas with '.autoresize' class
    */
    document.querySelectorAll('.autoresize').forEach(function (el) {
        autoResizeTextfields(el);
    });

});
