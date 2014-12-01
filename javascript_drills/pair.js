var obj = {
    "Anil": "Bridgpal",
    "Sarah": "Hanley",
    "Lenny": "Urbanowski",
}

var pair = function(object){
    keys = Object.keys(object);
    newerArray = []

    keys.forEach(function(element, index){
        newArray = []
        newArray.push(element)
        newArray.push(object[element])
        newerArray.push(newArray)
    })
    return newerArray
}

var pair2 = function(object){
    keys = Object.keys(object);
    newArray = []

    keys.forEach(function(element, index){
        newArray.push([element, object[element]])
    })
    return newArray
}

var pair3 = function(object){
    keys = Object.keys(object);
    return keys.map(function(element, index){
        return [element, object[element]]
    })
}

console.log(pair3(obj))

// must use brackets when passing a var through an object
