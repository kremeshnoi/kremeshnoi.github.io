window.onload = function () {

  const $SVG = $('svg');
  const $cardholderName = $('#cardholder-name-input');
  const $cardNumber = $('#card-number-input');
  const $expirationDate = $('#expiration-date-input');
  const $cvvInput = $('#security-code-input');
  const $creditCard = $('.container .credit-card');

  $SVG.attr("viewBox", "0 0 750 470");
  $cardNumber.mask('0000 0000 0000 0000');
  $expirationDate.mask('00/00');

  $cardholderName.keyup(function () {
    const stt = $(this).val();
    $("#cardholder-name, #back-card-holder-name").text(stt);
  });

  $cardholderName.keydown(function () {
    const stt = $(this).val();
    $("#cardholder-name, #back-card-holder-name").text(stt);
  });

  $cardNumber.keyup(function () {
    const stt = $(this).val();
    $("#card-number").text(stt);
  });

  $cardNumber.keydown(function () {
    const stt = $(this).val();
    $("#card-number").text(stt);
  });

  $expirationDate.keyup(function () {
    const stt = $(this).val();
    $("#expiration-date").text(stt);
  });

  $expirationDate.keydown(function () {
    const stt = $(this).val();
    $("#expiration-date").text(stt);
  });

  $cvvInput.keyup(function () {
    const stt = $(this).val();
    $("#cvv").text(stt);
  });

  $cvvInput.keydown(function () {
    const stt = $(this).val();
    $("#cvv").text(stt);
  });

  $creditCard.on('click', function () {
    if ($(this).hasClass('front-position')) {
      $(this).removeClass('front-position').css('transform', 'rotateY(180deg)');
      $(this).addClass('back-position');
    } else if ($(this).hasClass('back-position')) {
      $(this).removeClass('back-position').css('transform', 'rotateY(0deg)');
      $(this).addClass('front-position');
    }
  });

};