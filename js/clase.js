/*

const mascotas=[
    'olivia',
    'asteroid',
    'olivia',
    'popi',
    'catrina'
];

console.log(mascotas[3]);

//Asignacion de valores
console.log(mascotas[5]);
mascotas[5] = 'Michi nuevo';
console.log(mascotas[5]);

//Agregar elementos
mascotas.push('alejandro');
console.log(mascotas);

//Quitar elementos
mascotas.pop();

//loop con for
const segmentos = [1,5,7,10,23,55,33];

for (let i = 0; i < segmentos.length; i++) {
    const numero = segmentos[i];
    console.log(numero)
};

//loop con while
let j = 0;

while (j < mascotas.length) {
    console.log(mascotas[j])
    j++;
};

*/

//EJERCICIO

/*Dado dos valores un array de numeros y un numero, retornar un array con los numeros de ese array mayores a ese
numero dado. Si hay numeros con esas condiciones retornar un array vacio.

Ej: dados [1,2,3,4] y el numero 2, retornamos [3,4]


[1,2,3,3,3,5,6], 2
[1000,2,100,1,200], 50
[0], 5
[1,1,-1], 0
[], 3


let array1 = [1,2,3,3,3,5,6]
let array2 = [1000,2,100,1,200]
let array3 = [0]
let array4 = [1,1,-1]
let array5 = []


function caso1(array, numero){
    const resultado = [];

    array.forEach(element => {
        if(element > numero){
            resultado.push(element)
            console.log(element)
        }
    });
}

caso1(array1, 2)





wile(){
}

*/