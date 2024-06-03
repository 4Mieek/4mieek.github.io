// Elementos <------------------------------------------------------------
const fecha = document.getElementById('fecha');
const horario = document.getElementById('horario');
const opcion = document.getElementById('opcion');
const txtResult = document.getElementById('txtResult');
const inResult = document.getElementById('inResult');
const btnCopy = document.getElementById('btnCopy');

// Funciones <------------------------------------------------------------
function webLoaded(){
    let tiempo = new Date();
    let minuto = tiempo.getMinutes().toString().padStart(2, '0');
    let hora = tiempo.getHours().toString().padStart(2, '0');
    let dia = tiempo.getDate().toString().padStart(2, '0');
    let mes = (tiempo.getMonth() + 1).toString().padStart(2, '0');
    let año = tiempo.getFullYear();
    fecha.value = `${año}-${mes}-${dia}`;
    horario.value = `${hora}:${minuto}`;
    opcion.value = 'R';
    unix = Math.floor(tiempo / 1000);

    switch(opcion.value){
        case 'R':
            timeUnix = `<t:${unix}:R>`
            break;
        case 'd':
            timeUnix = `<t:${unix}:d>`
            break;
        case 'D':
            timeUnix = `<t:${unix}:D>`
            break;
        case 't':
            timeUnix = `<t:${unix}:t>`
            break;
        case 'T':
            timeUnix = `<t:${unix}:T>`
            break;
        case 'f':
            timeUnix = `<t:${unix}:f>`
            break;
        case 'F':
            timeUnix = `<t:${unix}:F>`
            break;
    }
    inResult.value = timeUnix;

}

function changeElements(){
    console.log(`${fecha.value}T${horario.value}:00`);
    let tempTime = `${fecha.value}T${horario.value}`;
    let tiempo = new Date(tempTime);
    let unix = Math.floor(tiempo / 1000);

    switch(opcion.value){
        case 'R':
            timeUnix = `<t:${unix}:R>`
            break;
        case 'd':
            timeUnix = `<t:${unix}:d>`
            break;
        case 'D':
            timeUnix = `<t:${unix}:D>`
            break;
        case 't':
            timeUnix = `<t:${unix}:t>`
            break;
        case 'T':
            timeUnix = `<t:${unix}:T>`
            break;
        case 'f':
            timeUnix = `<t:${unix}:f>`
            break;
        case 'F':
            timeUnix = `<t:${unix}:F>`
            break;
    }

    inResult.value = timeUnix
}

function copy(){
    navigator.clipboard.writeText(inResult.value);
    alert('¡Texto copiado!')
}

function reset(){
    webLoaded();
}

// Eventos <------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function(){
    webLoaded();
})

fecha.addEventListener('change', function(){
    changeElements();
})

horario.addEventListener('change', function(){
    changeElements();
})

opcion.addEventListener('change', function(){
    changeElements();
})