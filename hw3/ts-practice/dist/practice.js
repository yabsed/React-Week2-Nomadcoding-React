"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(x, y) {
    // Type 'null' is not assignable 
    // to type 'number'.
    // return null; 
    return x + y;
}
sum(1, 2);
function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
function returnNothing() {
    console.log("Hi");
}
//# sourceMappingURL=practice.js.map