$(document).ready(function () {
    $('a[href^="#"]').click(function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        if ($(target).length) { // проверка существования элемента
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 800);
        }
    });
});