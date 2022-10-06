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
    /*     let numeroAleatorio = '5';

        let numeroUsuario = Number(prompt('Ingrese un numero'))
        let array = [1]
        let i = 0

        while (numeroUsuario !== numeroAleatorio) {
            if (numeroUsuario > numeroAleatorio) {
                numeroUsuario = Number(prompt('El numero secreto es MENOR'))
                array.push(numeroUsuario)
            } else if (numeroUsuario < numeroAleatorio) {
                numeroUsuario = Number(prompt('El numero secreto es MAYOR'))
                array.push(numeroUsuario)
            } else if (numeroUsuario = numeroAleatorio) {
                alert(`¡FELICIDADES! Lo hiciste en ${array.length} intentos`)
            }
            i++
        } */
}

// EJERCICIO 4
/* Realizar un programa que permita decir si un numero es primo. Un numero es primo
si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
numero ya no es primo. */
{

    /* let numero = Number(prompt('Introducí un numero'))
    let primo = true

    for (let i=2; i<numero; i++){
        if (numero % i == 0){
            primo = false
        }
        i++
    }

    if (primo == true){
        alert (`El numero ${numero} es primo`)
    } else{
        alert (`El numero ${numero} NO es primo`)
    } */
}

// EJERCICIO 5

// Realizar un programa que permita dado un numero, mostrar todos sus divisores.
{

/*     let numero = Number(prompt('Ingrese un numero para saber sus divisores'))
    let divisores = []

    for (let i = 0; i <= numero; i++) {
        if ( numero % i == 0){
            divisores.push(i)
        }
        i++
    }
    alert(`Los divisores de ${numero} son: ${divisores}`) */

}

// EJERCICIO 7

/* Dado un array de 10 numeros, realizar un programa que muestre por consola el
doble de cada uno de los elementos. */
{

/* let array = [2, 3, 4, 5, 6, 7, 8, 9 ,10, 11]

for (let i = 0; i < array.length; i++){
    let producto = array[i] * 2
    console.log(`El doble de ${array[i]} es ${producto}`)
} */

}

// EJERCICIO 8

/* Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
que muestre un mensaje de presentacion por cada elemento del array. */
{

/* let familia = [
    {
        nombre: 'Monica',
        edad: 47,
        altura: 1.77,
        sexo: 'femenino'
    },
    {
        nombre: 'Ariel',
        edad: 48,
        altura: 1.80,
        sexo: 'masculino'
    },
    {
        nombre: 'Jonathan',
        edad: 28,
        altura: 1.92,
        sexo: 'masculino'
    },
    {
        nombre: 'Abigail',
        edad: 25,
        altura: 1.73,
        sexo: 'femenino'
    },
    {
        nombre: 'Gianfranco',
        edad: 13,
        altura: 1.60,
        sexo: 'masculino'
    }
]

for (let i = 0; i < familia.length; i++){
    console.log(`Su nombre es ${familia[i].nombre}, su género es ${familia[i].sexo} y mide ${familia[i].altura} mts.. Hoy está cumpliendo ${familia[i].edad} años! `)
} */

}

// EJERCICIO 9

/* Dado un array de 10 numeros, realizar un programa que recorra el array y solo
muestre los numeros impares. */

{

    /* let array = [1,4,6,3,7,9,11,32,45,23,]
    console.log(array);

    for(let numero of array){
        if (numero % 2 !== 0){
            console.log(`Los numeros impares del array son: ${numero}`);
        }
    } */

}

// EJERCICIO 10

/*Realizar un programa que permita la entrada de numeros y calcule la suma de los
numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
el usuario ingresa un 0.*/
{
    let array = []
    let sumaPares = []
    let sumaImpares = []
    let resultadoPares = []
    let resultadoImpares = []


    let numeroIngresado = Number(prompt('Ingrese el numero'))
    array.push(numeroIngresado)

    while(numeroIngresado !== 0){
        numeroIngresado = Number(prompt('Ingrese el numero'))
        array.push(numeroIngresado)
    }

    for(let numeros of array){
        if (numeros % 2 === 0){
            sumaPares.push(numeros)
        } else if(numeros % 2 !== 0){
            sumaImpares.push(numeros)
        }
    }

    for (resultado of resultadoPares){
        resultadoPares += resultado
    }

    for (resultadin of resultadoImpares){
        resultadoImpares += resultadin
    }


    if (numeroIngresado === 0){
        console.log(resultadoPares);
    }
}