/**
 * EVENTS
 * Activar y Desactivar modal tanto desde el botón
 */
let video = document.getElementById("video")
$(".play").click(function(){
   $("#modal").toggleClass("active");
   video.pause();
})


var open = false;
/** 
	 * @description Obtiene el elemento menuEscondido y al cumplir la condición, añade la clase
     * active y cambia su estado. Al volver a hacer click en el botón si no está en su estado
     * original, remueve la clase.
	 * @version 1.0
	 * @returns true or false
	 */
 function openMenu(){
   var menu = document.getElementById("menuEscondido");
   if(open === false){
       menu.classList.add("active");
       open = true;
   } else {
       menu.classList.remove("active");
       open = false;
   }
}


