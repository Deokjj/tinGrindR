console.log("cookie");
$('.cookieBtn').click(function () {
  let newCookie = parseInt($('#cookie').html()) + 1;
  $('#cookie').html(newCookie);
});
