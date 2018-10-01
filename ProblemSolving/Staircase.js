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

// Complete the staircase function below.
function staircase(n) {
    let str = '';

    for(let i=1; i<=n; i++) {
        for(let j=n; j>=1; j--) {
            if(j>i)
                str += " ";
            else 
                str += "#";
        }
        console.log(str);
        str = '';
    }

}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
