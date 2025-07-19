

const character = ['Spiderman', 'Ironman', 'Superman', 'Batman'];

const [ s , , su ] = character; // The variables are in the position


const [s2, , su2, b2, w2 = 'Wasabi'] = character;

const returnArray = () => {
    return ['123', 'ABC'] as const;
}

console.log({s, su})
console.log({w2})

const [numbers, letters] = returnArray();

// console.log(numbers * 2, letters.toLowerCase() )