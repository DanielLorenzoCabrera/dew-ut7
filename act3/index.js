const imagenes = ['Damaso1', 'Felo1', 'Felo2', 'lujan1','Nestor1','Nestor2','Nestor3', 'Nestor4','Padron1', 'Padron2'];
document.addEventListener('DOMContentLoaded', inicio);

function inicio(){
    crearImagenes();

    const pics = document.querySelectorAll('img[data-img]');
    pics.forEach(pic =>{
        pic.addEventListener("click", mostrarImagen);
    })
    const cerrar = document.querySelector('.cerrar');
    cerrar.addEventListener("click", cerrarVisualizer)
}

function crearImagenes(){
    const wrapper =  document.querySelector('.wrapper');
    const img = imagenes.map(imagen =>{
        return `<img src='cuadros/${imagen}.gif' data-img='${imagen}'>`;
    })
    wrapper.innerHTML = `<h1>Galería - Pintores Canarios</h1> ${img.join('')}`
}


function mostrarImagen(){
    document.querySelector('.cuadro').src = `cuadros/${this.dataset.img}.jpg`;
    document.querySelector('.titulo').innerHTML = `cuadros/${this.dataset.img}.jpg`;
    const visualizer = document.querySelector('.visualizer');
    visualizer.style.display = "inherit";
}


function cerrarVisualizer(){
    document.querySelector('.visualizer').style.display = "none";
}