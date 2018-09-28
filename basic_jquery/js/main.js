$(document).ready(() => {
  $('.login-button').on('click', () => {
    $('.login-form').slideToggle('slow');
  });

  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
    $('.nav-menu').removeClass('hide');
    $('.menu-button').addClass('button-active');
    $('.menu-button').removeClass('hide');
    $('.menu-button').animate({
      fontSize: '24px'
    }, 200);
  })

  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
    $('.menu-button').removeClass('button-active');
    $('.menu-button').animate({
      fontSize: '18px'
    }, 200);
  })


  $('.product-photo').on('mouseenter', event => {
    $(event.currentTarget).addClass('photo-active')
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('photo-active')
  });
  $(".more-details-button").on("click", event => {
    $(event.currentTarget).toggle();
  });

  $(".buy-now-button").on("click", () => {
    $(".buy-now-button").fadeToggle(1000);
  });
});
