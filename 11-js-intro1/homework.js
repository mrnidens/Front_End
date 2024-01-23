let res = sumDigits(1234);
console.log(`sum digits = ${res}`); // 10
res = luckyNumber(123871); // 1 + 3 + 7 === 2 + 8 + 1
console.log(res ? 'Lucky' : 'Unlucky'); // Lucky


function sumDigits(a) {
    let sum = 0;
    while (a) {
        sum += a % 10;
        a = Math.floor(a / 10);
    }
    return sum;
}

function luckyNumber(a) {
    let numberString = a.toString();
    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 0; i < numberString.length; i++) {
        let digit = parseInt(numberString[i]);
        
        if (i % 2 === 0) {
            sumEven += digit;
        } else {
            sumOdd += digit;
        }
    }

    return sumOdd === sumEven;
}