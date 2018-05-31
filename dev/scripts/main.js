
$(function () {
    new TypeIt('.type-it', {
        strings: ["Web Developer", "Comic Enthusiast"],
        breakLines: false,
        cursor: false,
        loop: true
    });
    //Apply smooth scroll
    $('a').smoothScroll({ offset: 100, speed: 500 });

    // Animation to fill progress bar on mouseover
    $('.progressBackground').on('mouseover', function () {
        $(".progressBar", this).addClass('filled');
    });
    $('.progressBackground').on('mouseleave', function () {
        $(".progressBar", this).removeClass('filled');
    });
});