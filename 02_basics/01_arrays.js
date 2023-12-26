let myArray=[12,26,34,55,68,73]

console.log(myArray);
// console.log(myArray[1])

// myArray.push(62)

// console.log(myArray)

// myArray.pop()

// console.log(myArray);

// unshift adds at start and shift remove from start

// slice and splice

let arr1=myArray.slice(1,3)
console.log("A",arr1);

console.log(myArray);

let arr2=myArray.splice(1,3)
console.log("B",arr2);
console.log(myArray);

// slice and splice both return arrays, but slice returns copy of array while splice make changes in original array.