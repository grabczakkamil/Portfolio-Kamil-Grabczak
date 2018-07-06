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