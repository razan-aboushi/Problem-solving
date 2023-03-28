
//  Q1

function fibonacci1 (n)
 {
    let seqNum = [0, 1];

    for (let R = 2; R < n; R++) {
        seqNum[R] = seqNum[R - 1] + seqNum[R - 2];
    }

    return seqNum;
}

console.log(fibonacci1(10));







// Q2
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumArr(arrn) 
{
    if (arrn.length === 0) {
        return 0;
    }
    else {
        return arrn[0] + sumArr(arrn.slice(1));
    }
}

console.log(sumArr(arr1));







// anothr way Q2
let arr = [1, 2, 3, 4, 5];
let sum = 0;

function arrSum(arr, index) {
    if (index >= arr.length) {
        return;
    }
    sum += arr[index];
    arrSum(arr, index + 1);
}

arrSum(arr, 0);
console.log(sum);



//Q3 
function rString(str)
 {
    if (str === '') {
        return '';
    } else {
        return rString(str.substr(1)) + str.charAt(0);
    }
}

console.log(rString('Razan Aboushi'));







//Q4
function pTriangle(size) 
{
    if (size === 0) {
        return;
    } else {
        pTriangle(size - 1);
        let line = '';
        for (let i = 0; i < size; i++) {
            line += '*';
        }
        console.log(line);
    }
}

pTriangle(7);