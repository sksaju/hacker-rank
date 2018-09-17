'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the diagonalDifference function below.
function diagonalDifference(arr) {
    // Initializing variables
    let sum = 0, priSum = 0, secSum = 0;
    // Looping through the array and summing the diagonals.
    for (let j = 0; j < arr.length; j++) {
        // Calculating the primary diagonal.
        priSum += arr[j][j];
        // Reversing the second dimension of array to calculate secondary diagonal.
        secSum += arr[j][Math.abs(j - (arr.length - 1))];
    }

    // Calculating the absolute difference
    sum = Math.abs(priSum - secSum);
    
    return sum;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
