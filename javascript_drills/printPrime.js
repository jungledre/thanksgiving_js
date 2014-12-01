//BROKEN


var isPrime = function(number){
    for (var i = 2; i < number; i++) {

        if (number%i!==0) {
            return number
        }
        else {
            return
        }
    }
}

var printPrime = function(number){
    console.log(1)
    console.log(2)
    for (var i = 2; i <= number; i++) {

        if (isPrime(i)) {
            console.log(i)
        }
    }
}

printPrime(13)
