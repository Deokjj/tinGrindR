console.log("Hey");
function init() {
    const myMain = document.querySelector('main');
    myMain.addEventListener('scroll', function(e){
        var distanceY = myMain.scrollTop,
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
window.onload = init;
