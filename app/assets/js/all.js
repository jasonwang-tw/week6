$('.card-group').owlCarousel({
  // center: true,
  items: 3,
  loop: false,
  margin: 20,
  stagePadding: 55,
  // responsive: {
  //   600: {
  //     items: 4
  //   }
  // }
});

$(window).scroll(function () { //隨時更新瀏覽器卷軸高度
  if ($(window).scrollTop() > 200) {
    $('.topMenu').addClass('bgBlack');
    $('.logo').addClass('logo_w');
  } else if ($(window).scrollTop() < 200) {
    $('.topMenu').removeClass('bgBlack');
    $('.logo').removeClass('logo_w');
  }
});