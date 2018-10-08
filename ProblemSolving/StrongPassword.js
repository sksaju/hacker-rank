'use strict';

const fs = require('fs');

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

// Complete the minimumNumber function below.
function minimumNumber(n, password) {
    
    let min_number_need = 0;
    
    if(!(/[a-z]/.test(password))) {
        min_number_need++;
    }
    if(!(/[A-Z]/.test(password))) {
        min_number_need++;
    }
    if(!(/[0-9]/.test(password))) {
        min_number_need++;
    }
    if(!(/[!|@|#|$|%|^|&|*|(|)|-|-|+]/.test(password))) {
        min_number_need++;
    }
    let update_length = (password.length)+min_number_need;
    if(update_length<6) {
        min_number_need += 6 - update_length;
    }
    
    return min_number_need;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const n = parseInt(readLine(), 10);
    const password = readLine();
    let answer = minimumNumber(n, password);
    ws.write(answer + "\n");
    ws.end();
}
