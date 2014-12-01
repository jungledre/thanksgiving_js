var compress = function(string) {
    newString = ""
    count = 1

    for (var i = 0; i <= string.length; i++) {
        if ( string.charAt(i) != string.charAt(i+1) ) {
            newString += count + string.charAt(i) + " "
            count = 1
        }
        else{
            count++
        }
    }
    return newString
}

console.log("AAASSSDDDDRDDSASSDDDSSSAD")
console.log(compress("AAASSSDDDDRDDSASSDDDSSSAD"))

