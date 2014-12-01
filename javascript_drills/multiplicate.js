var multi = function(n) {

    singleArray = []
    fullArray = []
    num = 1
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= n; j++) {
            singleArray.push(num*j)
        }
        fullArray.push(singleArray)
        num++

    }
return fullArray

}

console.log(multi(3))
