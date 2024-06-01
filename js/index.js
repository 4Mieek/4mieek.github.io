// Elementos
let fecha = document.getElementById('fecha');
let horario = document.getElementById('tiempo');
let type = document.getElementById('type');
let inResult = document.getElementById('inResult');

function webLoaded(){
    let hoy = new Date();
    let minutes = hoy.getMinutes().toString().padStart(2, '0');
    let hours = hoy.getHours().toString().padStart(2, '0');
    let day = hoy.getDay().toString().padStart(2, '0');
    let month = hoy.getMonth().toString().padStart(2, '0');
    let year = hoy.getFullYear().toString().padStart(2, '0');
    fecha.value = `${year}-${month}-${day}`;
    horario.value = `${hours}:${minutes}`;

    let dataTime = `${year}-${month}-${day}T${hours}:${minutes}:00`;
    let time = new Date(dataTime);
    let unixTime = Math.floor(time.getTime() / 1000);

    switch(type.value) {
        case 'R':
            unixTime = `<t:${unixTime}:R>`;
            break;
        case 'd':
            unixTime = `<t:${unixTime}:d>`;
            break;
        case 'D':
            unixTime = `<t:${unixTime}:D>`;
            break;
        case 't':
            unixTime = `<t:${unixTime}:t>`;
            break;
        case 'T':
            unixTime = `<t:${unixTime}:T>`;
            break;
        case 'f':
            unixTime = `<t:${unixTime}:f>`;
            break;
        case 'F':
            unixTime = `<t:${unixTime}:F>`;
            break;
    }

    inResult.value = unixTime;
}

function changeElements(){
    let dataTime = `${fecha.value}T${horario.value}:00`
    let time = new Date(dataTime);
    let unixTime = Math.floor(time.getTime() / 1000);

    switch(type.value) {
        case 'R':
            unixTime = `<t:${unixTime}:R>`;
            break;
        case 'd':
            unixTime = `<t:${unixTime}:d>`;
            break;
        case 'D':
            unixTime = `<t:${unixTime}:D>`;
            break;
        case 't':
            unixTime = `<t:${unixTime}:t>`;
            break;
        case 'T':
            unixTime = `<t:${unixTime}:T>`;
            break;
        case 'f':
            unixTime = `<t:${unixTime}:f>`;
            break;
        case 'F':
            unixTime = `<t:${unixTime}:F>`;
            break;
    }

    inResult.value = unixTime;
};

function copy(){
    navigator.clipboard.writeText(inResult.value);
    alert('¡Texto copiado correctamente!')
}

function reset(){
    let time = new Date();
    let minutes = time.getMinutes().toString().padStart(2, '0');
    let hours = time.getHours().toString().padStart(2, '0');
    let day = time.getDay().toString().padStart(2, 0);
    let month = time.getMonth().toString().padStart(2, '0');
    let year = time.getFullYear();

    fecha.value = `${year}-${month}-${day}`;
    horario.value = `${hours}:${minutes}`;
    type.value = 'R'
}

// Evento de inicio
document.addEventListener('DOMContentLoaded', function() {
    webLoaded();
});

fecha.addEventListener('change', function() {
    changeElements();
});

horario.addEventListener('change', function(){
    changeElements();
})

type.addEventListener('change', function(){
    changeElements();
})