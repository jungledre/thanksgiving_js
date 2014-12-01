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

isPalindrome('Hannah')
isPalindrome('Racecar')
