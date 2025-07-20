

// console.log('Init')

import type { Hero } from "../data/heroes";
import { getHeroById } from "./07-imp-exp";


// new Promise( ( resolve, reject ) => {
//     console.log('Promise body')

//     resolve('My friend give me the money');

//     reject('My friend dont give me the money');

// })
//     .then((message) => console.log(message))
//     .catch( errorMessage => console.log(errorMessage))
//     .finally( () => console.log('End of promise'));


// console.log('End')

const getHeroByIdAsync = ( id: number ): Promise<Hero> => {

    return new Promise ( (resolve, reject) => {

    setTimeout(() => {
        
        const hero = getHeroById( id )

        hero ? resolve(hero) : reject(`Hero not found with Id ${id}`)        

    }, 1500);

    })
}


getHeroByIdAsync(15)
    .then( hero => console.log(`The name is ${hero.name}`))
    // .catch ( message => alert(message)) 
    .catch ( alert ) 