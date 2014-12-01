var isPrime = function(number){
    for (var i = 2; i < number; i++) {

        if (number%i!==0) {
            return true
        }
        else {
            return
        }
    }
}

console.log(isPrime(13))
