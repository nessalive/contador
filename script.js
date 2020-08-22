let mais = document.getElementById('mais');

let menos = document.getElementById('menos');

let zera = document.getElementById('zerar');

let inicial = 0;

mais.addEventListener('click', incremento);
function incremento(){
    inicial++;
    document.getElementById('mostrar').innerHTML = inicial;
}

menos.addEventListener('click', decremento);
function decremento(){
    inicial--;
    document.getElementById('mostrar').innerHTML = inicial;
}

zera.addEventListener('click', zerou)
function zerou(){
    inicial = 0;
    document.getElementById('mostrar').innerHTML = inicial;
}