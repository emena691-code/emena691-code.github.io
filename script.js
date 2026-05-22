// document.querySelector('')

const target = document.querySelector('body') // variable de objetivo en html

function handleClick() { //Funcion que se activa con addEvent...
    console.log("clicked the body")
}

target.addEventListener('click', handleClick) // Escucha los eventos

////
function handleClick2() { //Funcion anidada en etiqueta dentro del html
    console.log("clicked the heading")
}

