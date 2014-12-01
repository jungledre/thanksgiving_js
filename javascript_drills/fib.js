var fib = function(n){
    var fib1 = 0
    var fib2 = 1
    var fib3 = 1
    fibs = [0, 1]
    for (var i = 0; i < n; i++) {
        fib3 = fib1 + fib2
        fib1 = fib2
        fib2 = fib3
        fibs.push(fib3)
    }
    return fibs
}

console.log(fib(10))
