
$(function () {
    //Create typing effect
    new TypeIt('.type-it', {
        strings: ["Front-End Developer", "Enthusiastic Learner", "Avid Googler", "Pug Lover", "Comic Book Fanatic", "Coffee Connoisseur", "Board Game Geek", "Shower Singer"],
        breakLines: false,
        cursor: false,
        loop: true
    });

    //Apply smooth scroll
    $('a').smoothScroll({ speed: 500 });

    $('.responsive-nav-icon').on('click touch', function() {
        console.log('clicked');
        $('.menu').toggleClass('show-menu');
        $('.responsive-nav-icon').toggleClass('change');
        $('.bar').toggleClass('animate');
    });

    //Add classes to change fixed nav on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $(".navigation-copy").addClass('scroll');
        } else {
            $(".navigation-copy").removeClass("scroll");
        }
    });
});