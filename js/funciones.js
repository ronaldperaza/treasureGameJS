//generate a random number
let getRandomNumber= size => {
    return Math.floor(Math.random() * size);
}

// obtener la distancia entre dos puntos
let getDistancia = (e, target) =>{     //e=evento donde el usuario a dado click target= ubicancion del mapa del tesoro u objetivo (target)
    let diferenciaX = e.offsetX - target.x;
    let diferenciaY = e.offsetY - target.y;

    return Math.sqrt((diferenciaX * diferenciaX) + (diferenciaY * diferenciaY));
}

let getDistanciaPista = distancia => {
    
    if(distancia < 30 ){
        return "Estas Hirviendo";
    } else if (distancia < 40 ){
        return "estas muy Cerca";
    } else if (distancia < 60 ){
        return "Cerca";
    } else if (distancia < 100 ){
        return "Normal";
    } else if (distancia < 180 ){
        return "frio";
    } else if (distancia < 360 ){
        return "Demasiado Frio";
    } else {
        return "Congelado"
    }
}