$(function () {
  if (window.matchMedia("(max-width: 575px)").matches) {
    $('div#tipo1').removeClass('show');
    $('div#tipo1').addClass('collapse');
  }
});

$(function () {
  const today = new Date();
  const ageMaria = today.getFullYear() - 2002;
  const ageCainan = today.getFullYear() - 2002;

  if (!document.querySelector('#age-maria')) return;
  
  const ageMariaElement = document.querySelector('#age-maria');
  const ageCainanElement = document.querySelector('#age-cainan');

  ageMariaElement.innerHTML = ageMaria;
  ageCainanElement.innerHTML = ageCainan;
});