type Person = {
    name: string;
    age?: number;
};

type Developer = Person & {
    skills: string[];
};

const person: Person = {
    name: "Charles",
    age: 80
};

const expert: Developer = {
    name: "Linus",
    skills: ['C', 'Linux']
};

type People = Person[]; 
const people: People = [person, expert];

console.log(people);

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];

console.log(color, colors); 