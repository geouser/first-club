
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
            $element = $('.menu-button'),
            $element2 = $('header'),
            className = 'hasScrolled';

        $document.scroll(function() {
            $element.toggleClass(className, $document.scrollTop() >= 1);
            $element2.toggleClass(className, $document.scrollTop() >= 1);
        });
    });

    /*---------------------------
                                  MENU TOGGLE
    ---------------------------*/
    $('.menu-button').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $(this).siblings('header').toggleClass('active');
        if ($('header').hasClass('active')) {
                $('body, html').css('overflow', 'hidden');
            } else {
                $('body, html').css('overflow', 'visible');
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