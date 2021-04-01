$( document ).ready(function(){
    $('.fn_switch').click(function(e){
        e.preventDefault();

        $(this).next().slideToggle(300);

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        }
        else {
            $(this).addClass('active');
        }
    });

    $(".fn_slider").slick({
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
    });
});