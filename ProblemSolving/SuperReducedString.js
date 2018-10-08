'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the superReducedString function below.
function superReducedString(s) {
    let acc = "";
    for(let i = 0; i < s.length; i++) {
        const c = s[i];
        if(acc.length > 0 && acc[acc.length - 1] === c) {
            acc = acc.slice(0, acc.length - 1);
        } else {
            acc += c;
        }
    }
    return (acc.length === 0 ? "Empty String" : acc);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const s = readLine();
    const result = superReducedString(s);
    ws.write(result + '\n');
    ws.end();
}
