
// nth fibonacci

function fibonacciRec(n) {
    if (n <= 1) {
        return n
    }
    let num = fibonacciRec(n - 1) + fibonacciRec(n - 2)
    console.log(num);
    return num
}

console.log(fibonacciRec(5))

