
const mykey=Symbol("key1")

let user={
    name:"Ashutosh",
    "full name":"Ashutosh kumar",
    [mykey]:"mykey1",    // using symbol in object, if used like mykey:"value" --> works like string only
    age:24,
    location:"Bengaluru"
}

console.log(user.name)
console.log(user["full name"]);
console.log(user["age"])
console.log(user);