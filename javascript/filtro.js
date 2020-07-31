$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.cont-work').show('1000');
        } else {
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });

    let info = $('#info').offset().top,
        productos = $('#productos').offset().top,
        contacto = $('#contacto').offset().top;

    window.addEventListener('resize', function(){
        let info = $('#info').offset().top,
            productos = $('#productos').offset().top,
            contacto = $('#contacto').offset().top;
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

    $('#enlace-productos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: productos - 100
        }, 600);
    });

    $('#enlace-about').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: info - 100
        }, 600);
    });

    $('#enlace-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto - 100
        }, 600);
    });
});
        