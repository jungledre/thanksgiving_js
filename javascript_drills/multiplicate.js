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

//multi2 is BROKEN

var multi2 = function(n){
    var row = ''
    var num = ''
    for (var i = 1; i <= n; i++) {

        for (var j = 1; j <= n; j++) {
            row += i*j + " "
        }
        num += i
    };

    if (row.length > n){
        row += "\n"
        console.log(row)
    }

}

multi2(3)
