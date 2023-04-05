
function printLoop(n) {
    if(n==0)return
    printLoop(n-1)
    console.log(n)
}

printLoop(5)