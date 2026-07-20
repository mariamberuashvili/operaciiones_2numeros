let nombre = "mariam"
let edad = 25;
 console.log("Hola, mi nombre es " + nombre + " y tengo " + edad + " años.");


 let numero1 = 10;
 let numero2 = 5;
 let resultado1 = numero1 + numero2;
 let resultado2 = numero1 - numero2;
 let resultado3 = numero1 * numero2;
 let resultado4 = numero1 / numero2;
 console.log("El resultado de la suma es: " + resultado1);
 console.log("El resultado de la resta es: " + resultado2);
 console.log("El resultado de la multiplicación es: " + resultado3);
 console.log("El resultado de la división es: " + resultado4);

let str = "123";
let numero = Number(str);
console.log("Número más 10:", numero + 10);


 function numPares(num) {
    if (num % 2 === 0) {
        return "El número " + num + " es par.";
    } else {
        return "El número " + num + " es impar.";
    } 
}
console.log(numPares(4));
console.log(numPares(7));

function minEdad(edad) {
    if (edad >= 18) {
        return "Eres mayor de edad.";
    } else {
        return "Eres menor de edad.";
    }
   
}   

console.log(minEdad(20));
console.log(minEdad(16));

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
    console.log("Número: " + i);
}
}

let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}           
console.log("La suma de los números del 1 al 100 es: " + suma);


    
let myNmae1 = "mariam";

function saludo(nombre) {
    console.log("Hola, " + nombre + "!");
}
saludo(myNmae1);

let myNmae2 = "mariam";
for (let i = 0; i < myNmae2.length; i++) {
    console.log(myNmae2[i]);
}


let arr = ["mariam", "juan", "ana", "luis"];

arr.splice(1, 1, "carlos");
console.log(arr);

