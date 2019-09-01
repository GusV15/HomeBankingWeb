/*
var meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
];

var planetas = [
    'Mercurio',
    'Venus',
    'Tierra',
    'Marte',
    'Saturno',
    'Jupiter',
    'Urano',
    'Neptuno',
    'Pluton'
]
*/
/*
1)

var mesDeMiCumple = 6;
console.log(meses[mesDeMiCumple-1]);
*/
/*
var cantMeses = meses.length;
var cantPlanetas = planetas.length;

alert(cantMeses);
alert(cantPlanetas);
*/

/*

2)

var ultimoMes = meses.length-1;
var ultimoPlaneta = planetas.length-1;

alert(meses[ultimoMes]);
alert(planetas[ultimoPlaneta]);
*/

/*
3)
alert(planetas[3]);
*/

// Ingresa un planeta y devuelve su ubicación.

var fueEncontrado = false;
var planetaAEncontrar = prompt("Ingrese un planeta:");
var planeta = 0;

for (let i = 0; i < planetas.length && !fueEncontrado; i++) {
    const element = planetas[i];
    if (element === planetaAEncontrar) {
        fueEncontrado = true;
        planeta = i+1;
    }
    
}
alert("El planeta que ingreso se encuentra ubicado en la posición " + planeta);


// Ingresa ubicación y devuelve el planeta.
/*
var fueEncontrado = false;
var planetaAEncontrar = parseInt(prompt("Ingrese la ubicación del Planeta:"));
var nombreDePlaneta = 0;

alert(planetas[planetaAEncontrar -1]);
*/
/*
var nombres = ['Sofia','Abril'];
var apellidos = ['Rodriguez','Lopez'];

alert(nombres[0] + ' ' +apellidos[0]);
*/
/*
var nombres = ['Sofia','Abril'];
var apellidos = ['Rodriguez','Lopez'];
var nombreCompleto = [nombres[1],apellidos[0]];

alert(nombreCompleto[0] +' '+ nombreCompleto[1]);
*/

/*
var corredores = [
    'Margarita',
    'Juan',
    'Raquel',
    'Ezequiel',
    'Gonzalo',
    'Martina',
    'Julian'
]

//alert(corredores[0]+' '+corredores[1]+' '+corredores[2]);

var losUltimos = [corredores[corredores.length-1], corredores[corredores.length-2]];

alert('Anteultimo: '+ losUltimos[1]+ ' \nUltimo: ' +losUltimos[0]);
*/
/*
var grilla = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

function esPar(valor){
    return (valor % 2) === 0;
}

for (let i = 0; i < grilla.length; i++) {
    for (let j = 0; j < grilla.length; j++) {
        let valorActual = grilla[i][j];
        if (esPar(valorActual)) {
            console.log(valorActual);
        }
    }  
}
*/