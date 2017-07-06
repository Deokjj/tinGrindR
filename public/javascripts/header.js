console.log("Hey");
function init() {
  console.log("Hey2");
    window.addEventListener('scroll', function(e){
      console.log("Hey3");
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 80;
        if (distanceY > shrinkOn) {
            $("header").addClass("smaller");
        } else {
            if ($("header").hasClass("smaller")) {
              $("header").removeClass("smaller");
            }
        }
    });
}
window.onload = init();
