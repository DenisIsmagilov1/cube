$('.header__burger').click(() => {
  $('.header__burger').toggleClass('active');
  $('.header__nav').toggleClass('active');
  $('.header__info__login__user').toggleClass('active');
  $('.header__info__login__lock').toggleClass('active');
});

$(document).ready(() => {
  $('.banner__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 30000,
  })
})
