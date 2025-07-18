
//Try to not use any type
// function greetPerson (name: string){
//     return `Hello ${name}`;
// }

// const greetPerson = (name: string) => {
//     return `Hello ${name}`;
// }

//Simplify function
const greetPerson = (name: string) => `Hello ${name}`;

console.log(greetPerson('Jaime'));

const getUser = (uid :string) => ({
    uid,
    username: 'JhonDoe001'
})

console.log( getUser('ABCD-123') );

const heroes = [
    {
        id: 1,
        name: 'Batman', //Try to finish with trailing comma
    },
    {
        id: 2,
        name: 'Superman',
        power: 'Super strong'
    },
];

const hero = heroes.find( (h) => h.id === 2);

console.log(hero?.power?.toUpperCase())