interface Person {
    name: string; 
    age?: number; 
}
interface Developer extends Person{
    skills: string[]; 
}

const person : Person = {
    name : "Charles", 
    age : 80
}; 

const expert : Developer = {
    name : "Linus",
    skills : ['C', 'Linux']
}; 

const people: Person[] = [person, expert]; 

console.log(people); 