// import heroes from "../data/heroes"; //Export for default

import heroes, { owners } from "../data/heroes";


// console.log(heroes)
console.log(owners ,heroes)

export const getHeroById = (id: number) => {
   return heroes.find( hero => hero.id === id) ?? {};
}

export const getHeroesByOwner = (owner: string) => {
    return heroes.filter (hero => hero.owner === owner) ?? 'No exist :(';
}

//find return only one; filter return all the matches

// console.log( getHeroById(1) )
// console.log( getHeroById(100) )
// console.log( getHeroById(100) )
console.log( getHeroesByOwner('DC') )