function findMinAndRemoveSorted(array) {
    return array.shift()
}

function merge(array1, array2) {
    let newArray = []
    while (array1.length > 0 && array2.length > 0) {
        if (array1[0] < array2[0]) {
            newArray.push(array1.shift())
        } else {
            newArray.push(array2.shift())
        }
    }
    return newArray.concat(array1).concat(array2)
}

function mergeSort(array) {
    let midpoint = array.length/2
    let firstHalf = array.slice(0,midpoint)
    let secondHalf = array.slice(midpoint, array.length)

    if (array.length < 2) {
        return array
    } else {
        return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}