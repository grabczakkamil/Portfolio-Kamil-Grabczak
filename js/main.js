    'use strict';
$(function() {
    $(".about-question").hide();
    
    $(".btn-about-question:nth-of-type(1)").click(function(){
        $(".about-question:nth-of-type(1)").toggle(1000);
    })
    
    $(".btn-about-question:nth-of-type(2)").click(function(){
        $(".about-question:nth-of-type(2)").toggle(1000);
    })
    
    $(".btn-about-question:nth-of-type(3)").click(function(){
        $(".about-question:nth-of-type(3)").toggle(1000);
    })
    
    $(".btn-about-question:nth-of-type(4)").click(function(){
        $(".about-question:nth-of-type(4)").toggle(1000);
    })
});

window.sr = ScrollReveal({reset:true});
sr.reveal('.scroll-reveall');

/*slider*/

$(function(){
    'use strict';
        
    var slideShow = $('.slide-show');
    var slideCount = $('.single-slide').length;
    var slideWidth = 100/slideCount;
    var slideIndex = 0;
    
    slideShow.css('width', 100 * slideCount + '%');
    
    slideShow.find('.single-slide').each(function(index) {
        $(this).css({
            'width': slideWidth + '%',
            'margin-left': slideWidth * index + '%'
        });
    });
    $(".prev-slide").click(function(){
        slide(slideIndex - 1);
    });
    
    $(".next-slide").click(function(){
        slide(slideIndex + 1);
    });
    
    function slide(newSlideIndex) {
        if(newSlideIndex >= 0 && newSlideIndex <= (slideCount - 1)) {
        
        var slideCaption = $(".slide-caption");
        var marginLeft = newSlideIndex * -100;
//        slideCaption.hide();
        
        slideShow.animate({"margin-left": marginLeft + '%'}, 800, function(){
            slideIndex = newSlideIndex;
//            slideCaption.fadeIn();
        })
    }
else if(newSlideIndex = slideCount) {
    var slideCaption = $(".slide-caption");
        var marginLeft = 0;
//        slideCaption.hide();
        
        slideShow.animate({"margin-left": marginLeft + '%'}, 800, function(){
            slideIndex = 0;
//            slideCaption.fadeIn();
        })
}
    }
});

$(function () {
  $("a[href*='#']:not([href='#'])").click(function (e) {
        $("html, body").animate({
            scrollTop: $(this.hash).offset().top
        }, 600);
    });
});

$(function () {
        var sections = $('section'),
            navigation = $('nav');

        $(window).on('scroll', function () {
            var currentPosition = $(this).scrollTop();

            sections.each(function () {
                var top = $(this).offset().top-120,
                    bottom = top + $(this).outerHeight(true);

                if (currentPosition >= top && currentPosition <= bottom) {
                    navigation.find('a').removeClass('active');
                    sections.removeClass('active');

                    $(this).addClass('active');
                    navigation.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
                }
            });
        });
    });
