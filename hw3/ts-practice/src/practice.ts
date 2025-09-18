function sum(x: number, y:number): number {

    // Type 'null' is not assignable 
    // to type 'number'.

    // return null; 
    
    return x + y; 
}

sum(1, 2); 

function sumArray(numbers: number[]) : number {
    return numbers.reduce((acc, current) => acc + current, 0); 
}

const total = sumArray([1,2,3,4,5]); 

function returnNothing() : void {
    console.log("Hi"); 
}

