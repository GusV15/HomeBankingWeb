//Declaración de variables

//Nombre del dueño de la Cuenta Home Banking.
var nombreUsuario = "Gustavo Velasquez";
//Valor inicial del saldo de la Cuenta Home Banking.
var saldoCuenta = 25000;
//Valor inicial que limita la extracción.
var limiteExtraccion = 3000;
//Servicio para pagar desde Cuenta Home Banking.
var servicioDeTelefono = 650;
//Servicio para pagar desde Cuenta Home Banking.
var servicioDeAgua = 450;
//Servicio para pagar desde Cuenta Home Banking.
var servicioDeLuz = 2000;
//Servicio para pagar desde Cuenta Home Banking.
var servicioDeInternet = 870;
//Cuenta destino para transferencias.
var cuentaAmiga1 = "1234567";
//Cuenta destino para transferencias.
var cuentaAmiga2 = "7654321";
//Clave de acceso a Cuenta Home Banking.
var claveDeSeguridad = "1234";
//Cantidad de intentos erroneos a la cuenta Home Banking.
var cantLogueosErroneos = 0;

var sesionIniciada = false;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
	iniciarSesion();
	cargarNombreEnPantalla();
	actualizarSaldoEnPantalla();
	actualizarLimiteEnPantalla();
}

//Función que devuelve el valor de la variable nombreUsuario.
function getNombreUsuario(){
	return nombreUsuario;
}

//Función que devuelve el valor actual de la variable SaldoCuenta.
function getSaldoCuenta(){
	return saldoCuenta;
}

//Función que devuelve el valor actual de la variable limiteExtraccion.
function getLimiteExtraccion(){
	return limiteExtraccion;
}

//Función que cambia el valor actual de la variable limiteExtraccion.
function setLimiteExtraccion(nuevoLimite){
	limiteExtraccion = nuevoLimite;
}

//Función booleana que verifica si el valor ingresado por el usuario es positivo o no.
function esPositivo(valor){
	let esPositivo = true;
	if(valor < 0){
		esPositivo = false;
		alert("No se puede ingresar valores negativos");
	}
	return esPositivo;
}
//Función booleana que verifica si el valor ingresado por el usuario es nulo o vacío.
function esValido(valor){
	let esNoNulo = true;
	if (valor === null || valor === "") {
		esNoNulo = false;
		alert("El valor ingresado es Nulo o Vacío");
	}
	return esNoNulo;
}

/* Valida si el valor ingresado por el usuario cumple con los siguientes puntos:
	1- Es menor o igual al saldo cuenta actual.
	2- Es menor o igual al límite de extracción actual.
	3- Es multiplo de 100.
*/
function validaExtraccion(valorAExtraer){
	let valorValido = true;
	if(valorAExtraer > getSaldoCuenta()){
		alert("Saldo insuficiente para realizar la extracción deseada.");
		valorValido = false;
	}else if(valorAExtraer > limiteExtraccion){
		alert("Saldo supera el límite de extracción.");
		valorValido = false;
	}else if(valorAExtraer % 100 != 0){
		alert("Solo puedes extraer billetes de $100.");
		valorValido = false;
	}
	return valorValido;
}

//Función booleana que verifica si el valor ingresado por el usuario es numérico o no.
function esValorNumerico(monto){
	let esNumerico = true;
	if (isNaN(monto) == true && !Number.isInteger(monto)){
		esNumerico = false;
		alert("El valor ingresado no es un valor entero o numérico");
	}
	return esNumerico;
}

//Función que verifica, de acuerdo al servicio ingresado por el usuario, si su tarifa es mayor o menor a saldoCuenta.
function selectorDeServicioAPagar(servicio){
	if(servicio > getSaldoCuenta()){
		alert("Saldo insuficiente para realizar este pago.");
	}else{
		let saldoCuentaAnterior = getSaldoCuenta();
		restaDineroACuenta(servicio);
		actualizarSaldoEnPantalla();
		alert("Has pagado el servicio. \n Saldo anterior: $"+ saldoCuentaAnterior +
				"\n Dinero descontado de la cuenta: $"+ servicio+
				"\n Saldo actual: $"+ getSaldoCuenta());
	}
}

// Recibe valor a sumar a saldo de cuenta.
function sumarDineroACuenta(valorADepositar){
	saldoCuenta += valorADepositar;
}

// Recibe valor a restar a saldo de cuenta.
function restaDineroACuenta(valorAExtraer){
	saldoCuenta -= valorAExtraer;
}

//Función que modifica el valor del límite de extracción.
function cambiarLimiteDeExtraccion() {
	let nuevoLimiteExtraccion = prompt("Ingrese el limite de extracción de su cuenta:");
	if(validaInicioSesion() && esValido(nuevoLimiteExtraccion) && esValorNumerico(nuevoLimiteExtraccion) && esPositivo(nuevoLimiteExtraccion)){
		setLimiteExtraccion(parseInt(nuevoLimiteExtraccion));
		actualizarLimiteEnPantalla();
		alert("Nuevo límite de extracción: $" + getLimiteExtraccion());
	}
}
	

//Función que extrae dinero, disminuyendo el valor de saldoCuenta.
function extraerDinero() {
	let valorAExtraer = prompt("Ingrese el saldo que desea extraer:");
	let saldoCuentaAnterior = getSaldoCuenta();
	if(validaInicioSesion() && esValido(valorAExtraer) && esValorNumerico(valorAExtraer) && esPositivo(valorAExtraer) && validaExtraccion(valorAExtraer)){
		restaDineroACuenta(parseInt(valorAExtraer));
		actualizarSaldoEnPantalla();
		alert("Detalles de transacción:\n Has extraido: " + valorAExtraer + 
		"\n Saldo anterior: " + saldoCuentaAnterior + 
		"\n Saldo actual: " + getSaldoCuenta());
	}
}



//Función que deposita dinero, aumentando el valor de saldoCuenta.
function depositarDinero() {
	let valorADepositar = prompt("Ingrese el saldo que desea depositar:");
	let saldoCuentaAnterior = getSaldoCuenta();
	if (validaInicioSesion() && esValido(valorADepositar) && esValorNumerico(valorADepositar) && esPositivo(valorADepositar)) {
		sumarDineroACuenta(parseInt(valorADepositar));
		actualizarSaldoEnPantalla();
		alert("Detalles de transacción:\n Has depositado: $" + valorADepositar + 
			"\n Saldo anterior: $" + saldoCuentaAnterior + 
			"\n Saldo actual: $" + getSaldoCuenta());
	}
}

//Función que realiza el pago de un servicio seleccionado por el usuario, disminuyendo el valor de saldoCuenta.
function pagarServicio() {
	let numeroDeServicio = prompt("Seleccione el Sevicio que desea pagar: \n 1- Agua \n 2 - Luz \n 3 - Teléfono \n 4 - Internet");
	if(validaInicioSesion() && esValido(numeroDeServicio) && esValorNumerico(numeroDeServicio) && esPositivo(numeroDeServicio)){
		switch(parseInt(numeroDeServicio)){
			case 1:
				selectorDeServicioAPagar(servicioDeAgua);
				break;
			case 2:
				selectorDeServicioAPagar(servicioDeLuz);
				break;
			case 3:
				selectorDeServicioAPagar(servicioDeTelefono);
				break;
			case 4:
				selectorDeServicioAPagar(servicioDeInternet);
				break;
			default:
				alert("No existe el servicio que ha seleccionado.");
		}
	}
}

//Función que verifica si la sesión de la cuenta fue iniciada, en caso contrario bloquea las operaciones.
function validaInicioSesion(){
	let iniciada = true;
	if (sesionIniciada == false) {
		iniciada = false;
		alert("Debe iniciar sesión para realizar esta Operación.");
	}
	return iniciada;
}

//Función que realiza transferencia de dinero a una cuenta seleccionada por el usuario, disminuyendo el valor de saldoCuenta.
function transferirDinero() {
	let montoATransferir = prompt("Ingrese el monto que desea transferir: ");
	if(validaInicioSesion() && esValido(montoATransferir) && esValorNumerico(montoATransferir) && esPositivo(montoATransferir)){
		if (parseInt(montoATransferir) > getSaldoCuenta()) {
			alert("Saldo insuficiente para realizar esta transferencia.");
		}else{
			let usuarioATransferir = parseInt(prompt("Seleccione la Cuenta Destino: \n 1 - Cuenta Amiga1 \n 2 - Cuenta Amiga2"));
			switch(parseInt(usuarioATransferir)){
				case 1:
					restaDineroACuenta(parseInt(montoATransferir));
					actualizarSaldoEnPantalla();
					alert("Detalles de Transferencia: \n Se ha transferido: $"+ montoATransferir+
							"\n Cuenta Destino: "+ cuentaAmiga1);
					break;
				case 2:
					restaDineroACuenta(parseInt(montoATransferir));
					actualizarSaldoEnPantalla();
					alert("Detalles de Transferencia: \n Se ha transferido: $"+ montoATransferir+
							"\n Cuenta Destino: "+ cuentaAmiga2);
					break;
				default:
					alert("No existe la cuenta que ha seleccionado.");
			}
		}
	}

}

// Función que se encarga de validar la clave numérica ingresada por el usuario. Si falla 3 veces, bloquea la cuenta, retirando el saldo disponible.
function iniciarSesion() {
	let codigoDeAcceso = parseInt(prompt("Ingrese su Clave de Acceso:"));
	while(cantLogueosErroneos < 3 && codigoDeAcceso != claveDeSeguridad) {
		codigoDeAcceso = parseInt(prompt("Clave de Acceso errónea. Vuelva a intentarlo:"));
		cantLogueosErroneos ++;
	}
	if(cantLogueosErroneos === 3){
		saldoCuenta = 0;
		alert("Ha superado la cantidad máxima de logueos.\n SU CUENTA HA SIDO BLOQUEADA!!\nTu dinero ha sido retenido por cuestiones de seguridad.");
	}else{
		sesionIniciada = true;
		alert("Bienvenido/a " + getNombreUsuario() + " ya puede comenzar a realizar operaciones.");
	}	
}

// Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
	document.getElementById("nombre").innerHTML = "Bienvenido/a " + getNombreUsuario();
}

function actualizarSaldoEnPantalla() {
		document.getElementById("saldo-cuenta").innerHTML = "$" + getSaldoCuenta();
}

function actualizarLimiteEnPantalla() {
	document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + getLimiteExtraccion();
}
