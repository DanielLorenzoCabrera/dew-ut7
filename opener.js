document.addEventListener("DOMContentLoaded", obtenerBotones);


function obtenerBotones(){

    (document.querySelector('.no-caracteristicas-una')).addEventListener("click", noCaracteristica);
    (document.querySelector('.no-caracteristicas-varias')).addEventListener("click", noCaracteristica);
    (document.querySelector('.con-caracteristicas')).addEventListener("click", conCaracteristica);
    (document.querySelector('.con-mas-caracteristicas')).addEventListener("click", conCaracteristica);
    (document.querySelector('.pantalla-completa')).addEventListener("click", pantallaCompleta);
    
    



}



function noCaracteristica(){
   const a =  window.open("ventanas/no-caracteristica.html","sin-características","");
   console.log(a);
}

function conCaracteristica(){
    console.log(this)
}

function pantallaCompleta(){
    console.log(this)
}