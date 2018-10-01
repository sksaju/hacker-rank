'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let sum=0, sum_arr = [];
    arr.map( function(item, index) {
        sum = arr.reduce(getSum)-item;
        sum_arr[index] = sum;
    });
    
    console.log(Math.min(...sum_arr)+' '+ Math.max(...sum_arr));
}

function getSum(total, num) {
    return total + num;
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    miniMaxSum(arr);
}
