
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