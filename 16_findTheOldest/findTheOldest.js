const findTheOldest = function(arr) {
    const oldest = arr.reduce((stored, current) => {
        storedStart = stored.yearOfBirth;
        storedEnd = stored.yearOfDeath 
            ? stored.yearOfDeath 
            : (new Date(Date.now())).getFullYear();
        storedAge = storedEnd - storedStart;

        currentStart = current.yearOfBirth;
        currentEnd = current.yearOfDeath 
            ? current.yearOfDeath 
            : (new Date(Date.now())).getFullYear();
        currentAge = currentEnd - currentStart;

        return currentAge > storedAge ? current : stored;
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
