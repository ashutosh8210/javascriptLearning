
let username="ashutosh"
function one(){
    let website="youtube.com"
    console.log("USERNAME: ",username);
    console.log("WEBSITE: ",website);
}

// console.log("USERNAME: ",username);
// console.log("WEBSITE: ",website);  --> Error

// one()

console.log(addOne(5));  //---Doesn't give error
function addOne(num){
    return num+1;
}

// console.log(addTwo(5)) ---> Give error

let addTwo=function(num){
    return num+2
}

console.log(addTwo(5))