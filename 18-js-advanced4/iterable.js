console.log('===== string =====');
const str = 'qwerty';
for (const c of str) {
    console.log(c);
}
console.log('=== array ===');
const arr = [2,3,5,7,11,13,17,19];
for (const n of arr) {
    console.log(n);
}
for (let i = 0; i < arr.length; i++) {
    console.log(`${i} -> ${arr[i]}`);
}
arr.forEach((e,i) =>  console.log(`${i} --- ${e}`))