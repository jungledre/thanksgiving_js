var obj = {
    "Anil": "Bridgpal",
    "Sarah": "Hanley",
    "Lenny": "Urbanowski",
}

key = Object.keys(obj);
newerArray = []

key.forEach(function(element, index){
    newArray = []
    newArray.push(element)
    newArray.push(obj[element])
    newerArray.push(newArray)
})
console.log(newerArray)
