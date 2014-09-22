  /* Using a self-executing anonymous function - (function(){})(); - so that all variables and functions defined within
  aren’t available to the outside world. */

  (function(){

  /* Load Script function we may need to load jQuery from the Google's CDN */
  /* That code is world-reknown. */
  /* One source: http://snipplr.com/view/18756/loadscript/ */

  var loadScript = function(url, callback){

    var script = document.createElement("script");
    script.type = "text/javascript";

    // If the browser is Internet Explorer.
    if (script.readyState){
      script.onreadystatechange = function(){
        if (script.readyState == "loaded" || script.readyState == "complete"){
          script.onreadystatechange = null;
          callback();
        }
      };
    // For any other browser.
    } else {
      script.onload = function(){
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);

  };



  $(function(){
    $('#store-bar').click(function() {
      console.log('#store-bar was clicked');
      $(this).addClass('show');
      $('#main').addClass('fade');
      // $('footer').hide();
      setTimeout(function(){
        window.location = 'http://www.bradleyrothenberg.com', 2000;
      }, 900);
    });
  });




  })();
