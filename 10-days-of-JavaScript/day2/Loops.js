/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const given_sting = s.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let given_vowels = [];
    let consonants = [];
    
    given_sting.map( function(item) {
        if(vowels.indexOf(item)>=0) {
            given_vowels.push(item);
        } else {
            consonants.push(item);
        }
    });
    
    given_vowels.map( function(item) {
        console.log(item);
    });
    consonants.map( function(item) {
        console.log(item);
    });
}