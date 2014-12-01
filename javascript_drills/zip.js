var artists = ["Passion Pit", "Mumford and Sons", "MGMT"];
var albums = ["Gossamer", "Sigh no more", "Time to Pretend"];

var zip = function(array, array2){
    var newerArray = []
    array.forEach(function(element, index){
        var newArray = []
        newArray.push(array[index])
        newArray.push(array2[index])
        newerArray.push(newArray)
    })
    return newerArray
}

var zip2 = function(array, array2){
    var newArray = []
    array.forEach(function(element, index){
        newArray.push([element, array2[index]])
    })
    return newArray
}

var zip3 = function(array, array2){
    return array.map(function(element, index){
        return  [element, array2[index]]
    })
}

console.log(zip(artists, albums))

// Output

// [ [ 'Passion Pit', 'Gossamer' ],
//   [ 'Mumford and Sons', 'Sigh no more' ],
//   [ 'MGMT', 'Time to Pretend' ] ]
