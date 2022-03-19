
function scrollToAnchor(aid){
  const destination = $(aid);
  $('html,body').animate({
      scrollTop: destination.offset().top
  },'slow');
}
$('.container #navbar-button').on('click', function () {
  $('#sidebar').toggle(300)
})
// $('main').on('click', function() {
//   $('#sidebar').css('display', 'none')
//   $('#navbar-button').css('display', 'block')
// })