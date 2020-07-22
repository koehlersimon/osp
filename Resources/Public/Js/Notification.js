document.addEventListener("DOMContentLoaded", function() {

    var showNotification = function(options) {
       const notification = new Notification(options['title'], {
          body: options['body']
       })
       notification.onclick = (e) => {
          window.location.href = options['url'];
       };
    };

    if (Notification.permission === "granted") {
        /*
        let options = {
            title: 'Thank you',
            body: 'Permission has been granted. We will send you some notifications from time to time!',
            url: 'https://opensourceproject.com'
        };
        showNotification(options);
        */
    }
    else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            //console.log(permission);
        });
    }

});
