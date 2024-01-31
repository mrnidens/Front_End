const arr = ['one', 'two', 'threE', 'eight', 'tHree', 'three', 'six'];
let res = arr.indexOf('three', 3);
// console.log(res);
// console.log('===========================================');
// res = arr.includes('two');
// console.log(res);
// console.log('===========================================');
// res = arr.findIndex(e => index > 2 && e.toLowerCase() === 'three');
// console.log(res);
// res = arr.findIndex(e => index >= 2 && e.length === 3);
// console.log(res);
console.log('===========================================');
const persons = [
    {
        name: 'Peter',
        age: 23
    },
    {
        name: 'John',
        age: 28
    },
    {
        name: 'Tigran',
        age: 26
    },
    {
        name: 'Rabindranate',
        age: 23
    }
];
res = persons.findIndex((p,i) => i >= 1 && p.age < 25);
console.log(res);
console.log('===========================================');
persons.forEach((p,i) => console.log(`${i+1}) ${p.name}, age: ${p.age}`));
console.log('===========================================');
res = persons.filter(p => p.age < 25);
console.log(res);
console.log('===========================================');
res = persons.map((p,i) => document.createTextNode(`${i+1}) ${p.name}, age: ${p.age}`));
console.log(res);
console.log('===========================================');
res = persons.map((p,i) =>  {
    const paragraph = document.createElement('p');
    paragraph.append(`${i+1}) ${p.name}, age: ${p.age}`)
    return paragraph;
}
);
console.log(res);
console.log('===========================================');
persons.filter(p => p.age > 23)
.map((p,i) => `${i+1}) ${p.name}, age: ${p.age}`)
.map(s => document.createTextNode(s))
.map(t => {
    document.createElement('p');
    p.append(t);
    return p;
})
.forEach(p => document.body.append(p));
    
