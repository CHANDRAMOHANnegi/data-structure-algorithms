
function sumOfFirstNnumbers(n, sum) {
    if (n == 0) {
        console.log(sum)
        return
    }
    sumOfFirstNnumbers(n - 1, sum + n)
}

function sumOfFirstNnumbersReturn(n) {
    if (n == 0) {
        return 0;
    }
    return n + sumOfFirstNnumbersReturn(n - 1)
}

// sumOfFirstNnumbers(2, 0)
console.log(sumOfFirstNnumbersReturn(5))

