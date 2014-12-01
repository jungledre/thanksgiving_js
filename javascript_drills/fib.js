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

var fib2 = function(n){
    var fib = [0, 1]
    for (var i = 2; i <= n-1; i++) {
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}

var fib3 = function(n){
    if (n <= 1){
        return n;
    }
    return fib3(n-1) + fib3(n-2)
}

console.log(fib3(10))
