$(document).ready(function(){
    $('.carousel__inner').slick({
        fade: true,
        cssEase: 'linear',
        speed: 1500,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/prev_arrow.svg"</button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/next_arrow.svg"</button>',
    });

    // modal

    $('[data-modal=contact]').on('click', function() {
        $('.overlay, #contact').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #contact').fadeOut('slow');
    });
  });