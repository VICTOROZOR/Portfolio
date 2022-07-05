$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({srollTop:0});
    });

    // typing animation
    // var typed = new Typed(".typing-1", {
    //     strings:["Hello, my name is"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });
    var typed = new Typed(".typing", {
        strings:["Hello, my name is", "Victor Ozor.", "I'm a Frontend Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings:["Frontend Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass(".active");
        $('.menu-btn i').toggleClass(".active");
    });
})