/* Funcion
Es un codigo de bloque reutilizable
Puede tener o no parametros de entrada
Puede devolver o no un valor */
function sumar(numero1, numero2){
    //Operaciones o código a ejecutar
    return numero1+numero2;
    console.log('Hola desde la función');
}
function restar(numero1,numero2){
    document.write(`La resta de ${numero1} y ${numero2} es ${numero1-numero2} <br>`);
}
let numero1= parseInt(prompt('Numero 1'));
let numero2= parseInt(prompt('Numero 2'));
//let numero3= 20;
let suma= sumar(numero1, numero2); 
//let suma= sumar(numero3, numero2); 
//template string
// ` backstick 
document.write(`La suma de ${numero1} y ${numero2} es ${suma}<br>`);
restar(numero1,numero2);
document.write('La suma de '+numero1+ ' y ' +numero2 +' es ' +suma);
