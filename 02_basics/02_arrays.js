const marvel_heroes=["Thor","IronMan","Captain America","Hulk"]

const dc_heroes=["Superman","Batman","Flash"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
const all_heroes=marvel_heroes.concat(dc_heroes)

// console.log(all_heroes);

const all_heroes2=[...marvel_heroes,...dc_heroes]

// console.log(all_heroes2);

const another_array=[2,4,5,3,9,[23,63,49],33,[101,102,[2004,2005]]]

// console.log(another_array);

let flat_array=another_array.flat(Infinity)

// console.log(flat_array);

console.log(Array.isArray("Ashutosh"));
console.log(Array.from("Ashutosh"))