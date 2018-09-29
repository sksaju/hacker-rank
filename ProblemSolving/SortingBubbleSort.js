'use strict';

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

// Complete the countSwaps function below.
function countSwaps(n, a) {
    let swaps = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j=0; j < n-1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j+1]) {
                let temp = a[j];
                a[j] = a[j + 1];
                a[j+1] = temp;
                swaps++;
            }
        }
    }
    
    console.log(`Array is sorted in ${swaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[n-1]}`);

}

function main() {
    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    countSwaps(n, a);
}
