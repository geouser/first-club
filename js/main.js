
// Global parameters
window.params = {
    widthFull: 750,
    maxRowHeight: 0,
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
};



jQuery(document).ready(function($) {

    /*---------------------------
                                  ADD CLASS ON SCROLL
    ---------------------------*/
    $(function() { 
      var $document = $(document),
          $element = $('nav'),
          className = 'hasScrolled';

      $document.scroll(function() {
        $element.toggleClass(className, $document.scrollTop() >= 200);
      });
    });

    $('nav a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800);

      $('.menu-button').removeClass('active');
      $('header').removeClass('active');
      if ($('header').hasClass('active')) {
          $('body').css('overflow', 'hidden');
        } else {
          $('body').css('overflow', 'visible');
          $('section').css('filter', 'blur(0px)');
        }
        return false;
    });


    /*---------------------------
                                  MENU TOGGLE
    ---------------------------*/
    $('.menu-button').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $(this).siblings('header').toggleClass('active');
        if ($('header').hasClass('active')) {
            $('body').css('overflow', 'hidden');
            $('section').css('filter', 'blur(2px)');
        } else {
            $('body').css('overflow', 'visible');
            $('section').css('filter', 'blur(0px)');
        }
    });



    /*---------------------------
                                  Magnific popup
    ---------------------------*/
    $('.magnific').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',
        modal: false,

        closeBtnInside: true,
        preloader: false,
        
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });


     /*---------------------------
                                  Slick slider
    ---------------------------*/
    $('.offer__slider').slick({
        dots: false,
        fade: true
    });
    
    $('.slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        lazyLoad: 'ondemand'
    });
    
    $('.gallery-prev').on('click', function (e){
        e.preventDefault;
        $('.slider').slick('slickPrev');
    });
    
    $('.gallery-next').on('click', function (e){
        e.preventDefault;
        $('.slider').slick('slickNext');
    })
    


}); // end file