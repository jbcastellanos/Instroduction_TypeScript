
// Structure of a function 

function calculateArea(radius:number):number {
    const pi = 3.14;
    const area = pi * radius * radius;
    return area;
}

// the first type define the type of params and the second define the variable that we return, in this case is "number" in both.

const result = calculateArea(10)
console.log(result);

// when we don't return nothing in a function we type "void". 

function print(area:number):void {
    console.log(result);   
}

print(result)

// to create a function with several parameter we do the next:

function areaRectangle(width:number, length:number):number {
    return width * length;
}

console.log(areaRectangle(4,3));
