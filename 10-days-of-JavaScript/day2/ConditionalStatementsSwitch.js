function getLetter(s) {
    const set1 = ['a', 'e', 'i', 'o', 'u'];
    const set2 = ['b', 'c', 'd', 'f', 'g'];
    const set3 = ['h', 'j', 'k', 'l', 'm'];
    const set4 = ['n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    
    let letter;
    if(set1.indexOf(s[0])>=0) {
        letter = 'A';
    } else if(set2.indexOf(s[0])>=0) {
        letter = 'B';
    } else if(set3.indexOf(s[0])>=0) {
        letter = 'C';
    } else if(set4.indexOf(s[0])>=0) {
        letter = 'D';
    }
    
    return letter;
}