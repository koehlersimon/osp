( function( root, factory ) {
    var pluginName = 'JavascriptLightbox';
    if ( typeof define === 'function' && define.amd ) {
        define( [], factory( pluginName ) );
    } else if ( typeof exports === 'object' ) {
        module.exports = factory( pluginName );
    } else {
        root[ pluginName ] = factory( pluginName );
    }
}( this, function( pluginName ) {

    'use strict';

    var galleryTotal = 0;
    var galleryCurrent = 0;
    var docbody = document.querySelector('body');
    var lightbox = document.createElement('div');

    var defaults = {
        selector: 'javascript-lightbox',
        zindex: 800
    };

    /**
     * Merge defaults with user options
     * @param {Object} defaults Default settings
     * @param {Object} options User options
     */
    var extend = function( target, options ) {
        var prop, extended = {};
        for ( prop in defaults ) {
            if ( Object.prototype.hasOwnProperty.call( defaults, prop ) ) {
                extended[ prop ] = defaults[ prop ];
            }
        }
        for ( prop in options ) {
            if ( Object.prototype.hasOwnProperty.call( options, prop ) ) {
                extended[ prop ] = options[ prop ];
            }
        }
        return extended;
    };

    /**
     * Plugin Object
     * @param {Object} options User options
     * @constructor
     */
    function Plugin( options ) {
        this.options = extend( defaults, options );
        this.init();
    }

    /**
     * Plugin prototype
     * @public
     * @constructor
     */
    Plugin.prototype = {
        init: function() {
			var galleryItems = document.querySelectorAll('.'+this.options.selector);
            galleryTotal = galleryItems.length;
			lightbox.classList.add('javascript-lightbox');
            lightbox.style.zIndex = this.options.zindex;
	        docbody.appendChild(lightbox);
	        galleryItems.forEach((galleryItem, i) => {
                galleryItem.setAttribute('data-index',i);
                galleryItem.addEventListener('click', function(e) {
                    open(galleryItem.getAttribute('href'));
                    galleryCurrent = galleryItem.getAttribute('data-index');
                    e.preventDefault();
                    console.log('Current gallery item: ' + galleryCurrent);
        		}, false);
	        });
            addKeyListeners();
            console.log('Gallery items: ' + galleryTotal);
        },
        destroy: function() {
            // Remove any event listeners and undo any "init" actions here...
        },
        loadVideo: function(){

        },
        resetAll: function(someData) {
            //console.log( someData )
        }
    };


    var addKeyListeners = function(){

        document.addEventListener('keyup', function (event) {
            if (event.defaultPrevented) {
                return;
            }
            var key = event.key || event.keyCode;
            if (key === 'Escape' || key === 'Esc' || key === 27) {
                close();
            }
            if (key === 'ArrowRight') {
                next();
            }
            if (key === 'ArrowLeft') {
                previous();
            }
            console.log(key);
        });

    };


	/**
	* A private method
	* @private
	*/
	var open = function(src) {
		docbody.classList.add('javascript-lightbox-active');
		touchControls(docbody,lightbox);
		mouseControls(docbody,lightbox);
        content(src);
        lightbox.classList.add('open');
	};


    /**
	* A private method
	* @private
	*/
	var content = function(src) {
        lightbox.innerHTML = '';
        let img = document.createElement('img');
        img.onload = function() {
            setTimeout(function(){
                img.classList.add('in');
            }, 50);
        };
        img.src = src;
		lightbox.appendChild(img);
	};


	/**
	* A private method
	* @private
	*/
	var close = function() {
        lightbox.classList.add('remove');
        setTimeout(function(){
            lightbox.innerHTML = '';
            lightbox.classList.remove('open');
            lightbox.classList.remove('remove');
    		docbody.classList.remove('javascript-lightbox-active');
        }, 500);
	};


    /**
	* A private method
	* @private
	*/
	var next = function() {
        if(galleryCurrent < (galleryTotal-1)){
            let next = (parseInt(galleryCurrent) + 1);
            let target = document.querySelector("[data-index='"+next+"']");
            content(target.getAttribute('href'));
            galleryCurrent++;
        }
        else if(galleryCurrent === (galleryTotal-1)){
            console.log("THE END: " + (parseInt(galleryCurrent) + 1) );
            let target = document.querySelector("[data-index='0']");
            content(target.getAttribute('href'));
            galleryCurrent = 0;
        }
	};

    /**
	* A private method
	* @private
	*/
	var previous = function() {
        if(galleryCurrent > 0){
            let previous = (parseInt(galleryCurrent) - 1);
            let target = document.querySelector("[data-index='"+previous+"']");
            content(target.getAttribute('href'));
            galleryCurrent--;
        }
        else{
            console.log("THE END: " + (parseInt(galleryCurrent) + 1) );
            let target = document.querySelector("[data-index='"+(galleryTotal-1)+"']");
            content(target.getAttribute('href'));
            galleryCurrent = (galleryTotal-1);
        }
	};


	/**
	* A private method
	* @private
	*/
	var mouseControls = function() {
		lightbox.addEventListener('click', function(e) {
            if (e.target === this){
                close();
            }
            else if(e.target.nodeName === 'IMG'){
                mousePosition(e,e.target);
            }
		}, false);
	};


    /**
    * A private method
    * @private
    */
    var mousePosition = function(mouseEvent,targetBox){
        var obj = targetBox;
        var obj_left = 0;
        var obj_top = 0;
        var xpos;
        var ypos;
        while (obj.offsetParent){
            obj_left += obj.offsetLeft;
            obj_top += obj.offsetTop;
            obj = obj.offsetParent;
        }
        if (mouseEvent){ //FireFox
            xpos = mouseEvent.pageX;
            ypos = mouseEvent.pageY;
        }
        else{ //IE
            xpos = window.event.x + document.body.scrollLeft - 2;
            ypos = window.event.y + document.body.scrollTop - 2;
        }
        xpos -= obj_left;
        ypos -= obj_top;
        if(xpos < 160 ){
            previous();
        }
        else if(xpos > (getWidth(targetBox,'outer') - 160)){
            next();
        }
    };


    /**
	* A private method
	* @private
	*/
    var getWidth = function(el, type) {
        if (type === 'inner')  // .innerWidth()
            return el.clientWidth;
        else if (type === 'outer')  // .outerWidth()
            return el.offsetWidth;
        let s = window.getComputedStyle(el, null);
        if (type === 'width')  // .width()
            return el.clientWidth - parseInt(s.getPropertyValue('padding-left')) - parseInt(s.getPropertyValue('padding-right'));
        else if (type === 'full')  // .outerWidth(includeMargins = true)
            return el.offsetWidth + parseInt(s.getPropertyValue('margin-left')) + parseInt(s.getPropertyValue('margin-right'));
        return null;
    }


	/**
	* A private method
	* @private
	*/
	var touchControls = function(docbody,lightbox) {
		let touchstartX = 0;
		let touchstartY = 0;
		let touchendX = 0;
		let touchendY = 0;
		const gestureZone = lightbox;
		gestureZone.addEventListener('touchstart', function(event) {
		    touchstartX = event.changedTouches[0].screenX;
		    touchstartY = event.changedTouches[0].screenY;
		}, false);
		gestureZone.addEventListener('touchend', function(event) {
		    touchendX = event.changedTouches[0].screenX;
		    touchendY = event.changedTouches[0].screenY;
		    touchGestures(touchendX,touchstartX,touchendY,touchstartY);
		}, false);
	};


	/**
	* A private method
	* @private
	*/
	var touchGestures = function(touchendX,touchstartX,touchendY,touchstartY) {
		if (touchendX < touchstartX) {
	        console.log('Swiped left');
            next();
	    }
	    if (touchendX > touchstartX) {
	        console.log('Swiped right');
            previous();
	    }
	    if (touchendY < touchstartY) {
	        console.log('Swiped up');
	    }
	    if (touchendY > touchstartY) {
	       console.log('Swiped down');
	    }
	    if (touchendY === touchstartY) {
	       console.log('Tap');
	    }
	};

	return Plugin;

} ) );
