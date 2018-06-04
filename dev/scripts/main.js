
$(function () {
    //Create typing effect
    new TypeIt('.type-it', {
        strings: ["Front-End Developer", "Enthusiastic Learner", "Avid Googler", "Pug Lover", "Comic Book Fanatic", "Coffee Consumer", "Board Game Geek", "MMO Master"],
        breakLines: false,
        cursor: false,
        loop: true
    });

    //Apply smooth scroll
    $('a').smoothScroll({ offset: 100, speed: 500 });

    //Add classes to change fixed nav on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $(".navigation-copy").addClass('scroll');
        } else {
            $(".navigation-copy").removeClass("scroll");
        }
    });
});