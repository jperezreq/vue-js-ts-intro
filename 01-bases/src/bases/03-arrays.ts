

export const numberArray = [1,2,3,4,5]; //as const;


numberArray.push(6);


const numberArray2 = [...numberArray];

//Si queremos permitir numeros y string 
// const numberArray2: (string | number)[] = [...numberArray];


numberArray2.push(7);


// const numberArray3 = numberArray.map(value => {
//     value.toExponential
//     value.toFixed
// })

console.log({numberArray})

console.log({numberArray2})