const palindromes = function (str) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const candidate = str
        .toUpperCase()
        .split("")
        .filter(e => alphabet.includes(e));
    let isPalindrome = true;
    for(let i = 0; i < candidate.length / 2; i++) {
        if(candidate.at(i) !== candidate.at(-(i + 1))) {
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
