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

var zipper = zip(artists, albums)

console.log(zipper)

// Try again with Map

// Output

// [ [ 'Passion Pit', 'Gossamer' ],
//   [ 'Mumford and Sons', 'Sigh no more' ],
//   [ 'MGMT', 'Time to Pretend' ] ]
