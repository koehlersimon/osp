// DOM ready function
var domIsReady = (function(domIsReady) {
   var isBrowserIeOrNot = function() {
      return (!document.attachEvent || typeof document.attachEvent === "undefined" ? 'not-ie' : 'ie');
   };

   domIsReady = function(callback) {
      if(callback && typeof callback === 'function'){
         if(isBrowserIeOrNot() !== 'ie') {
            document.addEventListener("DOMContentLoaded", function() {
               return callback();
            });
         } else {
            document.attachEvent("onreadystatechange", function() {
               if(document.readyState === "complete") {
                  return callback();
               }
            });
         }
      } else {
         console.error('The callback is not a function!');
      }
   };

   return domIsReady;
})(domIsReady || {});


// Everything happens here when the DOM is ready...
(function(document, window, domIsReady, undefined) {
   domIsReady(function() {

        // Clean up the username string
        String.prototype.alphaNumeric = function() {
            return this.replace(/[^a-z0-9]/gi,'');
        };

        var usernameField = document.getElementById('goRegisterUsernameInput');
        var parentNode = usernameField.parentNode;
        var messageContainer = parentNode.appendChild(document.createElement('div'));
        var username = usernameField.value;

        // Add event listener to the username input field
        document.getElementById('goRegisterUsernameInput').addEventListener('change', checkUsername, false);

        // Function to check if the username already exists, fired by the event listener above
        function checkUsername(){

            // Check min length of the new password first
            if(usernameField.value.length < 4){
                messageContainer.innerHTML = '<small class="text-info">'+lang_username_minlength+'</small>';
            }
            else{
                messageContainer.innerHTML = '<small class="text-muted">'+lang_username_checking+'</small>';
                var myRequest = new XMLHttpRequest();
                usernameField.value = usernameField.value.alphaNumeric();
                myRequest.open('GET','/?tx_goregister_ajax[action]=usernameExists&tx_goregister_ajax[controller]=Ajax&tx_goregister_ajax[username]='+usernameField.value+'&type=3978051319876', true);
                myRequest.onreadystatechange = function () {
                    if (myRequest.readyState === 4) {
                        if(myRequest.responseText === '1'){
                            messageContainer.innerHTML = '<small class="text-danger">'+lang_username_not_available+'</small>';
                        }
                        else{
                            messageContainer.innerHTML = '<small class="text-success">'+lang_username_available+'</div>';
                        }
                    }
                };
                myRequest.send();
            }
        }

   });
})(document, window, domIsReady);
