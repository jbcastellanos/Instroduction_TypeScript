
// variables "const" and "let"  | const basically doesn't change while let does it!  

const someotherValue = 6

let someValue = 5
someValue = 3

const myName = "Juan"  

// There are differents types of write varaibles 
// camelCase 
// PascalCase
// SNAKE_CASE - snake_case

// Primitive type Data = Number + String + boolean 

let myOtherName: string = "Diego"

// Also you can name in Ts double kind of variable 

let aStringOrNumber: string | number = "";

aStringOrNumber = 3;
aStringOrNumber = "tres"

let nameOfUser: "complete" | "uncomplete" | "something-else" = "complete"


// Null and Undefined - the most recommedable is try to don't use undefined

let gift: undefined | string;
gift = "";
console.log(gift);



