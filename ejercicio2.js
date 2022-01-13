var fechaHoy =  Date.now();

function edad()
{
    let edadPersona = prompt("Digita tu edad");
    let edadPersona2 = fechaHoy-edadPersona;
    ("Tu edad es: "+edadPersona2);
}