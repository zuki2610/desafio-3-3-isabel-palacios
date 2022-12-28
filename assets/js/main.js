var colorSeccionado = '';

// Agregamos un listener donde detectamos si se piso la tecla "a", "s" o "d"
document.addEventListener('keydown', (event) => {
    //Guardamos el div en una constante y le asignaremos un borde por defecto
    const divColorSeleccionado = document.getElementById('div-color-seleccionado');
    divColorSeleccionado.style.border = '4px solid black';

    // Asignamos un valor a la variable color dependiendo del caso.
    if (event.key === 'a') {
        colorSeccionado = 'green';
    }else if(event.key === 's') {
        colorSeccionado = 'yellow';
    }else if(event.key === 'd'){
        colorSeccionado = 'red';
    }else {
        colorSeccionado = 'white';
    }

    //Si el color es blanco, agregamos un border solo para diferenciar
    if (colorSeccionado == 'white') {
        divColorSeleccionado.style.border = '4px solid lightgray'
    }

    divColorSeleccionado.style.backgroundColor = colorSeccionado;
});

const pintarElementoHTML = (divID, colorSeccionado) => document.getElementById(divID).style.backgroundColor = colorSeccionado;

document.querySelectorAll('.div-color').forEach(element => {
    element.addEventListener('click', e => {
        const divID = e.target.getAttribute('id');

        if (colorSeccionado === 'white' || colorSeccionado === '') {
            e.currentTarget.style.border = '4px solid lightgray';
        } else {
            e.currentTarget.style.border = '4px solid black';
        }

        
        pintarElementoHTML(divID, colorSeccionado);
    });
});
