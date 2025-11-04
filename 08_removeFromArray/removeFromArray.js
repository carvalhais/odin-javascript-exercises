const removeFromArray = function(arr, ...elements) {
    for (let e of elements) {
        let index = arr.indexOf(e);
        while(index !== -1) {
            arr.splice(index, 1)
            index = arr.indexOf(e);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
