//Crea un array vacío, y lo llena del 0 al 15.

/*
Introduce un numero a traves y se mostrará su factorial en pantalla.
*/
var boton = document.getElementById('factorial');

function calcularFactorial(e){
    var numeroACalcular = parseInt(document.getElementById('valor').value);
    let inicial = 1;
    for (let i = 1; i <= numeroACalcular; i++) {
        inicial *= arrayConValores[i];
    }
    let factorial = inicial;
    document.getElementById('resultado').value = factorial;
    e.preventDefault();
}
boton.addEventListener('click', calcularFactorial);