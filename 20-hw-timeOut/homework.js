// //Problem -> console 10 times 10
// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }

//Solution 1 -> use let
// for (let i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }

for (var i = 0; i < 10; i++) {
    (function (index) {
        setTimeout(function () {
            console.log(index);
        }, 1000);
    })(i);
}