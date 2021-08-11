$(function() {
    $('#navbarToggle').blur(function(event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 992) {
            $('#navbarNav').collapse('hide');
        }
    });
});



window.onscroll = function() { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('go-to-top').style.bottom = '40px';
  } else {
    document.getElementById('go-to-top').style.bottom = '-70px';
  }
}