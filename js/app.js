$(function () {
  if (window.matchMedia("(max-width: 575px)").matches) {
    $('div#tipo1').removeClass('show');
    $('div#tipo1').addClass('collapse');
  }
});