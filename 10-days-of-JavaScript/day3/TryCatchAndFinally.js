/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try { 
        s.split();
    }
    catch(err) {
        console.log(err.message);
        console.log(s);
    }
    finally {
        let arr = s.split("");
        arr = arr.reverse();
        let string = arr.join("");
        console.log(string);
    }
}