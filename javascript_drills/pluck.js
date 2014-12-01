// 1st Way:
var pluck = function(array, key){
    newArray = []
    array.map(function(element){
        newArray.push(element[key]);
    })
    return newArray
}

var pluck2 = function(array, key){
    newArray = array.map(function(element){
        return element[key]
    })
    return newArray
}

var albums = [
    {'name': 'Gossamer', 'artist': 'Passion Pit'},
    {'name': 'Sigh no more', 'artist': 'Mumford and Sons'},
    {'name': 'Time to Pretend', 'artist': 'MGMT'}
];

var plucked = pluck(albums, 'artist')

console.log(plucked);

//expected output: [ 'Passion Pit', 'Mumford and Sons', 'MGMT' ]


