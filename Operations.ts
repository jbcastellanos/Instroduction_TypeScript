// To run Quokka - control + shift + p --> quokka Start in current File

const number1 = 5;
const number2 = 6;

const finalScore = number1 + number2;

console.log(finalScore);

// == iqual to | However the most recommedable is us "===" cause compare the type and value at the same time
// != not iqual to  | "!==""
// > grater than (>=) 
// < less than  (<=)


if (finalScore === 11) {
    // executed the conditions
    console.log("It's correct");    
} else if (finalScore === 10) {
    // executed the conditions
    console.log("It's correct");    
} else {
    // executed the conditions
}

// truthy | non-zero numbers - non-zero strings - objects arrays functions

// False | zero - empty arrays - null - undifined - NaN (Not a number) - false 

const testTruthy = "executed"

if (testTruthy) {
    console.log("it's true");
    
}

// Concatenated with backtick 

const equivalent = `Hello${testTruthy}`
console.log(equivalent);


