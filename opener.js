document.addEventListener("DOMContentLoaded", obtenerBotones);


function obtenerBotones(){

    (document.querySelector('.no-caracteristicas-una')).addEventListener("click", noCaracteristica);
    (document.querySelector('.no-caracteristicas-varias')).addEventListener("click", noCaracteristica);
    (document.querySelector('.con-caracteristicas')).addEventListener("click", conCaracteristica);
    (document.querySelector('.con-mas-caracteristicas')).addEventListener("click", conCaracteristica);
    (document.querySelector('.pantalla-completa')).addEventListener("click", pantallaCompleta);
    (document.querySelector('.cerrar')).addEventListener("click", cerrarTodo);

}

const ventanas = [];



function noCaracteristica(){
    let veces = this.className === 'no-caracteristicas-una' ? 1 : 5;
    for(let i = 0; i < veces; i++){
        const ventana = window.open("ventanas/ventana_emergente.html", `sin-catacteristicas-${i}`, "");
        ventanas.push(ventana);
    }
}

function conCaracteristica(){
    const ventana = this.className === 'con-caracteristicas' 
    ? window.open("ventanas/ventana_emergente.html", `con-catacteristicas`, "height=430,width=420,status=yes,resizable=yes,menubar=no")
    : window.open("ventanas/ventana_emergente.html", `con-mas-catacteristicas`, "height=300,width=600,status=no,resizable=yes,menubar=no,left=150px,scrollbars=no,titlebar=no,location=no,top=");
    ventanas.push(ventana);
}

function pantallaCompleta(){
   const ventana=  window.open("ventanas/ventana_emergente.html", `full-screen`, "outerHeight=200,outerWidth=200,top=0,left=0");
   ventanas.push(ventana);
}

function cerrarTodo(){
    ventanas.forEach(ventana=>{
        ventana.close();
    })
}