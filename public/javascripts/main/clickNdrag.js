function clickOrDrag(href){
  var flag = 0;
  // var element = xxxx;
  this.addEventListener("mousedown", function(){
      flag = 0;
  }, false);
  this.addEventListener("mousemove", function(){
      flag = 1;
  }, false);
  this.addEventListener("mouseup", function(){
      if(flag === 0){
          window.location.href = href;
      }
      else if(flag === 1){
          console.log("dragged");
      }
    }, false);
}
