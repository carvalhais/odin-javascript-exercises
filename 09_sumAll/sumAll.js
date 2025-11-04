const sumAll = function(min, max) {
    if (!(Number.isSafeInteger(min) && Number.isSafeInteger(max))) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) [min, max] = [max, min];
    acc = 0;
    for (let i = min; i <= max; i++) acc += i;
    return acc;
};

// Do not edit below this line
module.exports = sumAll;
