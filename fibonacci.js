function fibonacci(number) {

    if (number < 0 ) {
        throw new Error(`Please provide a valid argument. Fibonacci sequence is valid only for numbers >= 0`);

    }

    if (!Number.isInteger(number)) {
        return (`Please provide a valid integer input`);
    }

    if (number === 0) return [];
    if (number === 1) return [0];
    if (number === 2) return [0,1];

    let fibArray = [0, 1];
    for (let i = 2; i < number; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
        
    return fibArray;
}

module.exports = fibonacci;
