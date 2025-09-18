let count = 0; 
count ++; 

// error!
// count = "raise error"; 

const msg: string = 'hello world'; 
const done: boolean = true; 

const numbers: number[] = [1,2,3]; 
const msgs: string[] = ['hello', 'world']; 

// error!
// msg.push(1); 

let mightBeUndefined: string | undefined = undefined; 
let nullableNumber: number | null = null; 

let color: 'red' | 'orange' | 'yellow' = 'yellow'; 

color = 'red'; 

// error!
// color = 'blue'; 
