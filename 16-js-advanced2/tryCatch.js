let person = {
    name: 'Peter'
}

printName(person);

function printName() {
    try {
        console.log(obj.name);
    } catch (e) {
        console.log(e.name);
        console.log(e.message);
    }
}