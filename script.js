// document.querySelector('')

const { version } = require("react")

const target = document.querySelector('body') // variable de objetivo en html

function handleClick() { //Funcion que se activa con addEvent...
    console.log("clicked the body")
}

target.addEventListener('click', handleClick) // Escucha los eventos

////
function handleClick2() { //Funcion anidada en etiqueta dentro del html
    console.log("clicked the heading")
}

//entrada_form para entradas del formulario//
var rudimentaria = 0
var pequeña = 0
var mediana = 0
var terminada = 0
var avanzada = 0

var categoria = ""

var ventas_form = document.querySelector('boton1_form')
var tienda_form = document.querySelector('boton2_form')

if(ventas_form == "si") {
    if(tienda_form == "si") {
        if(nombre_form == "si") {
            pequeña += 1
        } else {
            console.log("Error 100")
        }
        if(redes_form == "si") {
            pequeña += 1
        } else {
            console.log("Error 100")
        }
        if(maps_form == "si") {
            pequeña += 1
        } else {
            console.log("Error 100")  
        }
        if(papeleria_form == "si") {
            pequeña += 1
        } else {
            console.log("Error 100")
        }
        if(pequeña < 4) {
            categoria = "Empresa pequeña"
        } else if (pequeña == 4) {
            if(razon_form == "si") {
                mediana += 1
            } else {
                
            }
            if(pagina_form == "si") {
                mediana += 1
            } else {

            }
            if(correo_form == "si") {
                mediana += 1
            } else {

            }
            if(mediana < 3) {
                categoria = "Empresa mediana"
            } else if (mediana == 3) {
                if(video_form == "si") {
                    terminada += 1
                } else {

                }
                if(branding_form == "si") {
                    terminada += 1
                } else {

                }
                if(fotografia_form == "si") {
                    terminada += 1
                } else {

                }
                if(comunidad_form == "si") {
                    terminada += 1
                } else {

                }
                if(terminada < 4) {
                    categoria = "Empresa Terminada"
                } else if (terminada == 4) {
                    categoria = "Empresa Avanzada"
                }
            }
        }
    } else if (tienda_form == "no") {
        if(ventasok_form == "si") {
            if(nivel_form == "si") {
                console.log("enviar a tienda_form para empezar cuestionario")
            } else if (nivel_form == "no") {
                console.log("Realizar consultoria")
            }
        } else if (ventasok_form == "no") {
            console.log("Realizar consultoria")
        }
    } else {

    }
} else if (ventas_form == "no") {
    if(vender_form == "si") {
        console.log("Realizar consultoria")
    } else if (ventas_form == "no") {
        console.log("Portafolio")
    }
}