//Coordenadas del  mapa
const width = 400;
const height = 400;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

//click
let $map = document.getElementById('map');
let $distancia = document.getElementById('distance');
let click = 0;

$map.addEventListener('click', function(e) {
    console.log('click');
    click++;
    let distancia = getDistancia(e, target);
    let distanciaPista = getDistanciaPista(distancia);
    $distancia.innerHTML = `<h1>${distanciaPista}</h1>`;            //${}inner ojo con comillas``

    if(distancia < 20){                                         

        alert(`Encontraste el Tesoro en ${click} clicks!`); 
        // location.reload();
    }

});

