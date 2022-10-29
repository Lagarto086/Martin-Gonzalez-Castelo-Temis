
let vacio = true;
let nombreCliente;
let salario;
let antiguedad;
let tipoDesvinculacion;
let indemnizacion = 0;


function datoVacio (dato) {
    if  (dato != '') {
        vacio = false
    }
    else {
        alert("¡el dato ingresado es incorrecto!");
    }
}

// Función para verificar el tipo de desvinculación y que permite realizar el cálculo en base a las leyes laborales, siendo que:
// para 4 años de antiguedad o más, el factor es *4, 
// para 1 o fraccion (menos de 1 año) es *1 
// y para el resto su valor (2 y 3 se multiplica respectivamente por estos)

function verificacionDesvinculacion (tipo, anios, sueldo) {
    switch (tipo){
        case "renuncia" : indemnizacion = sueldo;
            vacio = false;
            break;
        case "despido" : if (anios > 3) {
                            indemnizacion = sueldo * 4
                        }
                        else if (anios < 2) {
                            indemnizacion = sueldo * 1
                        }
                        else {
                            indemnizacion = sueldo * anios;
                        }
                        vacio = false;
            break;
        default: 
            alert("¡ingrese correctamente el tipo de desvinculación!")
            break;
    }
}

while (vacio) {
    nombreCliente = prompt("Ingrese su nombre:");
    datoVacio (nombreCliente);
}

//se reinicia el valor para la próxima verificación
vacio = true; 

while (vacio) {
    salario = Number(prompt("Ingrese su salario:"));
    datoVacio (salario);
}

//se reinicia el valor para la próxima verificación
vacio = true;

while (vacio) {
    tipoDesvinculacion = prompt("Ingrese el tipo de desvinculación (renuncia o despido):");
    if (tipoDesvinculacion === "despido") {
        antiguedad = Number(prompt("Ingrese los años de trabajo:"));
    }
    verificacionDesvinculacion (tipoDesvinculacion, antiguedad, salario);
}

alert(nombreCliente + ", dado su " + tipoDesvinculacion + ", de la empresa por la que trabajó " + antiguedad + " con un sueldo de $ " + salario + " es de un Total de: $ " + indemnizacion);

