const fibonacci = function(order) {
    order = +order;
    if (order < 0 ) return "OOPS";
    fibo = [0, 1]
    // adjust order for 0th element
    while(fibo.length < order + 1) {
        fibo.push(fibo.at(-2) + fibo.at(-1));
    }
    return fibo.at(order);
};

// Do not edit below this line
module.exports = fibonacci;
