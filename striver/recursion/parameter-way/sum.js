
function sumOfFirstNnumbers(n, sum) {
    if (n == 0) {
        console.log(sum)
        return
    }
    sumOfFirstNnumbers(n - 1, sum + n)
}

// sumOfFirstNnumbers(2, 0) 