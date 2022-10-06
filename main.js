// EJERCICIO 1
{
    /* let numero = Number (prompt('Ingrese un numero: '))
    let producto

    for (let i = 1; i <= 10; i++) {
        producto = numero * i
        console.log(producto);
    } */
}

// EJERCICIO 2
// Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
// acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.

{
    /*   let numero = Number(prompt('Ingrese un numero'))
       array = [numero]

       while(numero !== 0){
           numero = Number(prompt('Ingrese un numero'))
           array.push(numero)
       } 
       alert(array) */
}

// EJERCICIO 3
/* Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
variable guardar un numero que este en el rango 1 - 100. La persona debera poder
ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
felicitaciones y decirle en cuantos intentos lo ha realizado. */

{
    let numeroAleatorio = 43

    let numeroUsuario = Number(prompt('Ingrese un numero'))
    let array = []
    let i = 0

    while (numeroUsuario !== numeroAleatorio) {
        if (numeroUsuario > numeroAleatorio) {
            numeroUsuario = Number(prompt('El numero secreto es MENOR'))
            array.push(numeroUsuario)
        } else if (numeroUsuario < numeroAleatorio) {
            numeroUsuario = Number(prompt('El numero secreto es MAYOR'))
            array.push(numeroUsuario)
        } else if (numeroUsuario === numeroAleatorio) {
            prompt(`Felicidades`)
        }
        i++
    }
}