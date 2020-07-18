document.addEventListener("DOMContentLoaded", function() {

    // Choose a method to resize!
    // Values: onFocus, onLoad, onHover
    var triggerMethod = 'onLoad';

    function autoResize(el,triggerMethod){
        let offset = el.offsetHeight - el.clientHeight;
        el.style.boxSizing = 'border-box';
        el.style.height = 'auto';
        el.style.height = el.scrollHeight + offset + 'px';
        el.removeEventListener(triggerMethod,autoResize.bind());
        console.log('Textfield '+triggerMethod+' resized!');
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

    var lightbox = new JavascriptLightbox({
         selector: "lightbox",
         zindex: 1020
    });

});
