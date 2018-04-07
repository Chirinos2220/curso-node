

function prueba(numero){

    let sum = 0;

    for (let index = 0; index <= 10; index++) {
        const element = index * index;

        sum = sum + element;
        
    }
    if([].length == '0'){

        console.log('es un arreglo vacio');
    }

    let count = 0;
    while( count < 100){

        console.log(count);

        count ++;
    }
    switch (numero) {
        case 1:

        console.log('soy el numero uno')

        case 2:
        console.log('soy el numero dos')

        case 3:
        console.log('soy otro numero')
            
            break;
    
        default:
            break;
    }

    return sum;
}

prueba(9);

let objeto = {

    nombre: 'objeto 1',
    calzado: 9,
    datos: {
        perro: 'firulais',
        edad: 8
    },
    metodo: function(params){

        return params;
    },
    mascotas:{
    nombre: 'firulais',

    edad: 8
    }

};

let funcion = function (params){
    return params;
}

console.log('[object]: ', objeto.nombre);

console.log(objeto.datos.perro);

console.log(objeto.metodo('hola desde objeto.metodo'));

console.log(funcion(6));

(function(){

    console.log('que onda que pex');
})();

(function(){

    return('que onda que pex');
})();

console.log(objeto.mascotas[0].nombre);

(function(obj){

    for ( let mascota of obj){

        console.log(mascota);
    }
})(objeto.mascotas);

for(let key in objeto){

    console.log(key);

    console.log(objeto[key]);
}