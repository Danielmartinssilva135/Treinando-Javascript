const turnOn = document.getElementById('turnOn');
const turnOff =  document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken (){
    return lamp.src.indexOf ('quebrada') > -1

    // indexOf é um método que faz uma varredura na strig procurando outro trexo de string
}

function lampOn (){
    if (!isLampBroken ()){
        lamp.src = './img/ligada.jpg';
    }
    
}

function lampOff (){
    if (!isLampBroken ()){ 
        lamp.src = './img/desligada.jpg';
    }
    
}

function lampBroken (){
    lamp.src = './img/quebrada.jpg';
}

turnOn.addEventListener('click',lampOn);
turnOff.addEventListener('click',lampOff);
lamp.addEventListener('mouseover',lampOn);
lamp.addEventListener('mouseleave',lampOff);
lamp.addEventListener('dblclick',lampBroken);




// lâmpada escuta o evento = lamp.addEventlistner