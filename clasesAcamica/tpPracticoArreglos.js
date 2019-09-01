/*
Pedir las 3 comidas favoritas al usuario utilizando un prompt. Guardar cada una de estas
comidas en un arreglo y mostrar por consola el largo del mismo.

*/ 
var comidasFavoritas = [];

var primeraComida = prompt("Ingrese su comida favorita:");
var segundaComida = prompt("Ingrese su segunda comida favorita:");
var terceraComida = prompt("Ingrese su tercera comida favorita:");

comidasFavoritas.push(primeraComida);
comidasFavoritas.push(segundaComida);
comidasFavoritas.push(terceraComida);

console.log(comidasFavoritas);


/*
Utilizando indexOf, mostrar con una alerta la posición del mensaje "Error de sintaxis"
var errores = ["Error de definición", "Error: función inexistente", "Error de sintaxis", "Error
indefinido"]

*/ 
var errores = [
    "Error de definición", 
    "Error: función inexistente", 
    "Error de sintaxis", 
    "Errorindefinido"
]

alert(errores.indexOf("Error de sintaxis"));

/*
Hacer una función que reciba un arreglo por parámetro y lo recorra con un ciclo for
mostrando sus valores por consola.
*/

var recorreArreglo = function(arregloARecorrer){
    for (let i = 0; i < arregloARecorrer.length; i++) {
        console.log(arregloARecorrer[i]);
    }
}

/*
Implementar una función que dado un arreglo de enteros por parámetro retorne la suma
de todos sus elementos.
Ejemplo: si pasamos por parámetro al arreglo [2, 5, 7], la función retornará 14, ya que
2+5+7 = 14.
*/

var numeros = [
    2,
    5,
    7
]
numeros.reverse
var sumaElementosDeArreglo = function(arregloASumar) {
    let resultado = 0;
    for (let i = 0; i < arregloASumar.length; i++) {
        resultado += arregloASumar[i];
    }
    return resultado;
}

/*
 Declarar una función que recorra un array pasado por parámetro de atrás hacia adelante,
imprimiendo por consola cada posición del array.
Por ejemplo: si el arreglo pasado por parámetro es [1, 2, 3] se deberá mostrar por consola:
3 2 1.
*/


var recorreDescendenteArreglo = function(arreglo){
    for (let i = arreglo.length-1; i >= 0 ; i--) {
         console.log(arreglo[i]);
    }
}

/*
(D) Declarar una función que reciba por parámetro dos arrays de números enteros. Se
debe almacenar en distintas variables la sumatoria de los números de cada array. Esta
función debe retornar la sumatoria más grande de las dos.
Ejemplo: Si se pasan por parámetro [2, 4, 5] y [1, 1, 1] se debe retornar 9, ya que 2+4+5 = 9
y es mayor a 3.
*/

var arreglo1 = [
    2,
    4,
    5
]
var arreglo2 = [
    1,
    1,
    1
]

var sumaElementosDeArreglo = function(arregloASumar) {
    let resultado = 0;
    for (let i = 0; i < arregloASumar.length; i++) {
        resultado += arregloASumar[i];
    }
    return resultado;
}

var devuelveSumatoriaMayor = function(arreglo1, arreglo2){
    let sumaArreglo1 = sumaElementosDeArreglo(arreglo1);
    let sumaArreglo2 = sumaElementosDeArreglo(arreglo2);

    if (sumaArreglo1 > sumaArreglo2) {
        return sumaArreglo1;
    } else {
        return sumaArreglo2;
    }
}

/*
Crear una función que encuentre el menor número de un array.
*/
var arreglo1 = [
    2,
    4,
    5,
    3,
    3,
    5,
    8,
    1
]

var encontrarMayorDeArreglo = function(arreglo) {
    let mayor = 0;
    for (let i = 0; i < arreglo.length; i++) {
        let actual = arreglo[i];
        if (actual > mayor) {
            mayor = actual;
        }
    }  
    return mayor;
}

/*
Implementar una función que recorra un arreglo de arreglo mostrando por pantalla cada
uno de sus elementos en orden.
Ejemplo: si el arreglo de arreglos es [[1, 5, 20], [2, 5, 2], [2,4, 5]] deberá retornar 1 5 20 2 5
2 2 4 5.
*/
var arrComp = [
    [1, 5, 20], 
    [2, 5, 2], 
    [2, 4, 5]
]
var recorreElementosInternos = function(matriz){
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            console.log(matriz[i][j]);
        }  
    }
}

/*
. (D) Creá una función que reciba como parámetro un arreglo de arreglos y lo “aplaste”.
Por ejemplo: entrada = [[1,2],[3,4],[5,6,7],[8]];
salida = [1,2,3,4,5,6,7,8];.
*/

var entrada = [
    [1,2],
    [3,4],
    [5,6,7],
    [8]
]

var aplastaArreglo = function(matrizEntrada){
    let matrizSalida = [];
    for (let i = 0; i < matrizEntrada.length; i++) {
        for (let j = 0; j < matrizEntrada[i].length; j++) {
            matrizSalida.push(matrizEntrada[i][j]);
        }        
    }
    return matrizSalida;
}

/*
Crear una función que cuente la cantidad de números pares en una matriz (arreglos
de arreglos). Para hacer esto, creá primero una función esPar(numero) que reciba un
número y retorne true si es par y false si es impar. Luego, incluila en la función
cantidadPares(matriz).
*/
var entrada = [
    [1,2],
    [3,4],
    [5,6,7],
    [8,7,2,5,7,1,10]
]

function esPar(valor){
    return valor % 2 === 0;
}

var cantidadDePares = function(matriz){
    let contador = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (esPar(matriz[i][j])) {
                contador ++;
            }
        }        
    }
    return contador;
}

/*
(D) Crear una función que permita al usuario crear un arreglo de tamaño N a través del
prompt y retornarlo.
Ejemplo:
- El usuario elige tamaño 4 a través del prompt
- Luego se le pide ingresar 4 valores
- La función retorna un arreglo con esos 4 valores.
*/


var escribirArregloDeseado = function(){
    let arregloUsuario = [];
    let tamañoDeArreglo = prompt("Ingrese tamaño deseado para arreglo:");
    for (let i = 0; i < tamañoDeArreglo; i++) {
        let valorIngresado = prompt("Ingrese un valor para el Arreglo:");
        arregloUsuario.push(valorIngresado);
    }
    return arregloUsuario;
}

