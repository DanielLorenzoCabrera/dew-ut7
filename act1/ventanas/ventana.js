


function obtenerBotones(){
    
    if(window.name === 'full-screen'){
        document.querySelector('.botones').innerHTML += `<p>Actualmente el fullscreen no está permitido debido a las molestias que genera al usuario</p>`;
    }



    const creador =  document.querySelector('.creador');
    creador.addEventListener("click", ()=>{
        document.querySelector('h1').innerHTML = "Página creada desde /opener.html";
    })

    const nombre =  document.querySelector('.nombre');
    nombre.addEventListener("click", ()=>{
        document.querySelector('h1').innerHTML = window.name;
    })


    const cerrar =  document.querySelector('.cerrar');
    cerrar.addEventListener("click", ()=>{
        window.close();
        })
}