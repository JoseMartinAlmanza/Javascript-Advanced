/* flujo */
/* 
/* Estructuras de control de flujo 

let edad= 10;
let tienesINE= true;
if(edad>=18 && tienesINE==true){
console.log('Puedes entrar');
}
else{
    console.log('No puedes entrar, carnalito');
}

/* 
Buenos días 6-11
Buenas tardes 12-18
Buenas noches 19-23
Déjame dormir 0-5
*//* 
let hora=parseInt(prompt('Dame la hora en tiempo de 24 horas: '));
            if(hora>=6&&hora<=11){
               console.log('Buenos días');
            }
else{
            if (hora>=12&&hora<=18){
                console.log('Buenas tardes');
            }
            else{
            if(hora>=19&&hora<=23){
                console.log('Buenas noches');
            }
                }   
            if(hora>=0&&hora<=5){
                console.log('Déjame dormir, carnalingo');
            }

            if(hora>24){
                console.log('Estás mal, chavo');
            }
        } 

        /* Operador ternario
        /* 
        (condicion a evaluar) ? se ejecuta si es verdadero : se ejecuta si es falso;
        
        /* 
        let edad1=19;
        /* (edad1>=18) ? console.log("Mayor de edad") : console.log("Menor de edad");
 */
        /* let pregunta =         (edad1>=18) ? "Mayor de edad" : "Menor de edad";
console.log(pregunta);
let preguntaEdad = `Tengo ${edad1} años y soy ${pregunta}`;
console.log(preguntaEdad);  */
/* let dia= parseInt(prompt("Dame el numero del día del 0 al 7 siendo 0 Domingo"));
if(dia == 0){
    console.log("Domingo");
}else
if(dia == 1){
    console.log("Lunes");
}else
if(dia == 2){
    console.log("Martes");
}else
if(dia == 3){
    console.log("Miércoles");
}else
if(dia == 4){
    console.log("Jueves");
}else
if(dia == 5){
    console.log("Viernes");
}else
if(dia == 6){
    console.log("Sabado");
}
//Switch
/* 
/* 
switch (variable a evaluar){
    case valor:
        -codigo a ejecutar-
        break;
        
    case valor:
        -codigo a ejecutar-
        break;
    default:
        -codigo a ejecutar-
        break;

}
*//* 
 switch(dia){
     case 0:
         console.log("Domingo");
         break;
     case 1:
         console.log("Lunes");
         break;
     case 2:
         console.log("Martes");
         break;
     case 3:
         console.log("Miércoles");
         break;
     case 4:
         console.log("Jueves");
         break;
     case 5:
         console.log("Viernes");
         break;
     case 6:
         console.log("Sábado");
         break;
    default:
        console.log("Por favor, teclea bien los digitos");
        break;
 }

 */
 let cuponDescuento= "Oro";
 let descuento;

 switch(cuponDescuento){
     case "Bronce":
     descuento = 5;
     break;
     case "Plata":
     descuento = 10;
     break;
     case "Oro":
     descuento = 15;
     break;
     default:
         console.log("Cupón Erróneo");
         break;
 }

 console.log(descuento);
