document.addEventListener("DOMContentLoaded", function() {

    console.log('Root.js');

    // Choose a method to resize!
    // Values: onFocus, onLoad, onHover
    var triggerMethod = 'onLoad';

    function autoResize(el,triggerMethod){
        let offset = el.offsetHeight - el.clientHeight;
        el.style.boxSizing = 'border-box';
        el.style.height = 'auto';
        el.style.height = el.scrollHeight + offset + 'px';
        el.removeEventListener(triggerMethod,autoResize.bind());
        //console.log('Textfield '+triggerMethod+' resized!');
    }

    document.querySelectorAll('.autoresize').forEach(function (el) {
        switch (triggerMethod) {
            case 'onFocus':
                el.addEventListener('focusin', autoResize.bind(null, el, 'focusin'));
            break;
            case 'onLoad':
                autoResize(el);
            break;
            case 'onHover':
                el.addEventListener('mouseover', autoResize.bind(null, el, 'mouseover'));
            break;
            default:
                autoResize(el,offset);
        }
    });

    window.refreshGlobal = function(){
        externalPosts();
    }

    function loadExternalPosts(){
        document.querySelectorAll('[data-posttype="2"]').forEach(function (el) {
            apiCall(el);
        });
    }

    function apiCall(el){
        let request = new XMLHttpRequest();
        request.open("POST", el.dataset.url, true);
        request.onreadystatechange = function() {
            if (request.readyState === 4 && request.status == "200") {
                console.log(request.responseText);
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

    function isInViewport(element) {
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
    var scrollStop = function (callback) {

    	// Make sure a valid callback was provided
    	if (!callback || typeof callback !== 'function') return;

    	// Setup scrolling variable
    	var isScrolling;

    	// Listen for scroll events
    	window.addEventListener('scroll', function (event) {

    		// Clear our timeout throughout the scroll
    		window.clearTimeout(isScrolling);

    		// Set a timeout to run after scrolling ends
    		isScrolling = setTimeout(function() {

    			// Run the callback
    			callback();

    		}, 66);

    	}, false);

    };

    scrollStop(function () {
        console.log( 'Scrolling has stopped.' );
        externalPosts();
    });

    function externalPosts() {
        var externalPosts = document.querySelectorAll('[data-posttype="2"]');
        externalPosts.forEach((post, i) => {
            if(isInViewport(post) && !post.querySelector('.content').classList.contains('loaded')){
                apiCall(post);
            }
            else{
                console.log('OUT');
            }
        });
    }

});
