let qCount = 0;

function hideArrow(){
  //after first Quetion show upward Arrow
  if(qCount === 0){
    $(".previousQBtn").addClass("_hidden");
  }
  else if(qCount === 5){
    $(".nextQBtn").addClass("_hidden");
    $('button.submitBtn').prop('disabled', false);
  }
  else{
    $(".previousQBtn").removeClass("_hidden");
    $(".nextQBtn").removeClass("_hidden");
    $('button.submitBtn').prop('disabled', true);
  }
}

// Next Question function
function nextQ(){
  $(".regQ" + qCount).removeClass('_visible');
  qCount++;
  $(".regQ" + qCount).addClass('_visible');
  $(".nextQBtn").addClass("whiteIt");
  setTimeout(() => {
    $(".nextQBtn").removeClass("whiteIt");
    hideArrow();
  }, 200);
}
$(".nextQBtn").click(nextQ);

// Previous Question function
function previousQ(){
  $(".regQ" + qCount).removeClass('_visible');
  qCount--;
  $(".regQ" + qCount).addClass('_visible');
  $(".previousQBtn").addClass("whiteIt");
  setTimeout(() => {
    $(".previousQBtn").removeClass("whiteIt");
    hideArrow();
  }, 200);
}
$(".previousQBtn").click(previousQ);

$("#navIntro").click(closeModal);

// var modalTriggers = document.querySelectorAll('[data-toggle="modal"]');
// Key to navigate Questions
$(document).keypress((e)=>{
  //Enter key
  if(e.which===13){
    if(closeModal() === true){return;}
    if(qCount!==5){
      nextQ();
    }
    else{
      $('.submitBtn').trigger('click');
    }
  }
});
$(document).keydown((e)=>{
  if(e.which === 40 || e.which === 38){
    if(closeModal() === true){return;}
  }
  //Down and Up
  if(e.which===40 && qCount !== 5){
    nextQ();
  }
  else if(e.which===38 && qCount !== 0){
    previousQ();
  }
});

//Slider display value
function genderVal(val){
  $(".genderVal").html(val);
}

// Genderless checkBox
$('input[name="genderLessInput"]').on('click', function(){
    if ( $(this).is(':checked') ) {
      // $('.genderSliderBox').fadeOut(1000);
      $('#genderInput').prop('disabled', true);
      $('.genderSliderNVal').addClass('graySlider');
    }
    else {
      // $('.genderSliderBox').fadeIn(1000);
      $('#genderInput').prop('disabled', false);
      $('.genderSliderNVal').removeClass('graySlider');
    }
});
