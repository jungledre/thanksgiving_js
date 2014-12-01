var isPalindrome = function(string){
    var newString = string.toLowerCase();
    var reversed = ""
    for (var i = newString.length - 1; i >= 0; i--) {
        reversed += newString[i]
    };
    if (newString === reversed){
        console.log(string + " is a palindrome.")
    }
    else {
        console.log(string + " is not a palindrome.")
    }
}

var isPalindrome2 = function(string){
    var newString = string.toLowerCase();
    for (var i = newString.length - 1; i >= 0; i--) {
        var j = newString.length - 1 - isPalindrome
        if (newString.charAt(i) != newString.charAt(j)){
            return false
        }
        else {
            return true
        }
    }
}

console.log(isPalindrome2('Hannah'))
isPalindrome('Racecar')
isPalindrome('Hello')
