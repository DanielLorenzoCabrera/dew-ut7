document.addEventListener("DOMContentLoaded", obtenerBotones);


function obtenerBotones(){

    const escribir = document.querySelector('.escribir');
    escribir.addEventListener("click",escribirTexto)
    const reiniciar = document.querySelector('.reiniciar');
    reiniciar.addEventListener("click",reiniciarCampos)

    const nombre = document.querySelector('.nombre');
    nombre.addEventListener("click",()=>{
        alert(`
        Contenedor superior
        Contenedor izquierdo
        Contenedor derecho`)
    })





}


function escribirTexto(){
    
    const selectedRadio = [...document.querySelectorAll('input[type="radio"]')].filter(input =>{return input.checked})[0];
    console.log(selectedRadio.value)
    const contenedor = document.querySelector(`.${selectedRadio.value}`)
    const input = document.querySelector('input.salida');
    contenedor.querySelector('.salida').innerHTML = input.value;
    
}


function reiniciarCampos(){
    const salidas =  document.querySelectorAll('.salida').forEach(salida => {
        salida.innerHTML = "";
        salida.value = "";
    })
}