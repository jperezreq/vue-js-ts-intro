interface Hero {
    name: string;
    age: number;
    codeName: string;
    power?: string; // Put interrogant if can be not appear
}



export const person: Hero = {
    name: 'Tony',
    age: 45,
    codeName: 'Iroman',
};

const { age, name, power = 'No power' } = person // Can be an object or an Array


// console.log(person.name)
// console.log(person.age)
// console.log(person.codeName)

// console.log({
//     name: person.name,
//     age: person.age,
// })

console.log({ age, name, power })

interface createHeroArgs {
    name: string;
    age: number;
    codeName: string;
    power?: string;
}

// as const not found with interface

const createHero = ( {name, age, codeName, power}: createHeroArgs ) => ({
    id: 3424342,
    name: name,
    age: age,
    codeName: codeName,
    power: power ?? 'No power'
})


// console.log( createHero({ person }) )