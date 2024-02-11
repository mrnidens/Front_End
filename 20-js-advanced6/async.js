console.log('one');
setTimeout(() => console.log('Two'), 2);
setTimeout(() => {
    console.log("Two 1/2");
    setTimeout(() => console.log('Ooops'), 1);
}, 1);
console.log('Three');