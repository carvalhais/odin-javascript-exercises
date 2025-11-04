const reverseString = function(str) {
    arr = str.split("");
    rev = []
    while(arr.length) {
        rev.push(arr.pop());
    }
    return rev.join("");
};

// Do not edit below this line
module.exports = reverseString;
