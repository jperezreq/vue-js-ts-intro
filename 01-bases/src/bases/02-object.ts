

export const person = {
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zip: 5515145,
        lat: 14.23232,
        lng: 16.48484
    }
}; //as const;


// person.age = 55;

//Todos los objetos en JS se pasan por referencia
const person2 = person;

//Para copiar sin hacer por referencia el primero, pero los objetos de dentro siguen fucionando por referencia 
const person3 = {...person};

//Copiar tenga los objetos que tenga dentro sin hacer nada por referencia
const person4 = structuredClone(person);

person2.lastName = 'Parker',

console.log({person})
console.log({person2})
console.log({person3})