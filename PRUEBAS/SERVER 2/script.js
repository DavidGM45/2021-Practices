document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

function mostrar_menu()
{
    /* SELECCION DEL MENÚ*/
    document.querySelector(".menu").classList.toggle("mostrar_menu");
}
window.onscroll = function()
{
    /*
        especificar con window.onscroll que trabajaremos
        con la barra de scroll de la pantalla
    */

    var posicion = window.pageYOffset || document.documentElement.scrollTop;
    /*
        pageYOffset = obtener el movimiento en eje Y & ScrollTop 
    */

    var elemento1 = document.getElementById("icon_heart")
    var elemento2 = document.getElementById("icon_fire")
    /*
        Creación de variable del elemento1 (heart) y elemento2 (fire)
        usando getElementById para identificarlo por su ID
        SIEMPRE USAR ID
    */

    elemento1.style.bottom = posicion * 0.1 + "px";
    elemento2.style.top = posicion * 0.1 + "px";
}


