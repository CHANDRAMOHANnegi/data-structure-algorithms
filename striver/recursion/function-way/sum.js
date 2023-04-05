
function sumOfFirstNnumbersReturn(n) {
    if (n == 0) {
        return 0;
    }
    return n + sumOfFirstNnumbersReturn(n - 1)
}

console.log(sumOfFirstNnumbersReturn(5))

