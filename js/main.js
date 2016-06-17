
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
          $element = $('header nav'),
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


    var $sections = $('section');
    $(window).scroll(function(){
        var currentScroll = $(this).scrollTop();
        var $currentSection;
        var windowHalf = $(window).height() / 1.5;
        
        $sections.each(function(){
          var divPosition = $(this).offset().top - windowHalf;
          
          if( divPosition - 1 < currentScroll ){
            $currentSection = $(this);
          }
        var id = $currentSection.attr('id');
          $('a').removeClass('active');
          $("[href=#"+id+"]").addClass('active');
        })
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
    
    $('.gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		}
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
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
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