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

function pickingNumbers(a) {
    
    var mySet= new Set();
    var maxCount=0;
    for(var i=0; i<a.length; i++){
        var count=0;
        if(!mySet.has(a[i])){
            mySet.add(a[i]);
            for(var j=0; j<a.length; j++){
                if(a[j]==a[i] || a[j]==a[i]+1){
                    count++;
                }       
            }
            maxCount= Math.max(maxCount,count);
        }
    }
    return maxCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const n = parseInt(readLine(), 10);
    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    let result = pickingNumbers(a);
    ws.write(result + "\n");
    ws.end();
}
