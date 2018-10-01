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

// Complete the plusMinus function below.
function plusMinus(n, arr) {
    let positive_num=0, negative_num=0, zeros=0;
    
    arr.map( function(item, index) {
        if(item>0) {
            positive_num++;
        } else if (item<0) {
            negative_num++;
        } else {
            zeros++;
        }
    });
    const fraction_positive_num = (positive_num/n);
    const fraction_negative_num = (negative_num/n);
    const fraction_zeros_num = (zeros/n);
    
    console.log(fraction_positive_num.toFixed(6));
    console.log(fraction_negative_num.toFixed(6));
    console.log(fraction_zeros_num.toFixed(6));

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(n, arr);
}
