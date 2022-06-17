$(document).ready(function(){

    //efecto menu
    $(".menu a").each(function(index,elemento){//seleccionamos cada elemento y usamos un callback
        $(this).css({//aplicamos css a cada elemento
            "top":"-200px"
        });

        $(this).animate({//uasamos animate para ejecutar css con una transicion
            "top": "0"
        },2000 +(index*500));//definimos el tiempo de la transicion "index*500" define un pequeno retarazo por cada elemento del index
    });

    //efecto Header
    if($(window).width()>800){//condidcional que comprueba que el pamano de la pantalla sea mayor a 800px
        $("header .textos").css({//aplicando estilos css
            opacity:0,
            marginTop:0
        })
        $("header .textos").animate({
            opacity:1,//animando estilos css
            marginTop:"-52"
        },1500)

    }
    //Definision de variables
    var acercaDe = $("#acerca-de").offset().top;
    var menu = $("#platillos").offset().top;
    var galeria = $("#galeria").offset().top;
    var ubicacion = $("#ubicacion").offset().top;
    //boton
    $("#btn-acerca-de").on("click", function(e){//boton
        e.preventDefault();//prevenir default
        $("html, body").animate({ //funcion que permite desplazarse hasta la variable
            scrollTop: acercaDe -70
        },500)
    })

    $("#btn-menu").on("click", function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: menu
        },500)
    })

    $("#btn-galeria").on("click", function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: galeria-30
        },500)
    })

    $("#btn-ubicacion").on("click", function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: ubicacion
        },500)
    })
});