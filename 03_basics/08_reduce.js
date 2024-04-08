const nums=[1,2,3,4]

// const total=nums.reduce(function(acc,currVal){
//     console.log(`accumulator: ${acc} current Value: ${currVal}`);
//     return acc*currVal
// },3)

// const total=nums.reduce((acc,currVal)=>{console.log(`accumulator: ${acc} current Value: ${currVal}`);return acc+currVal},3)


// console.log(total);



const cart=[
    {item:"Shirt",price:699},
    {item:"Tshirt",price:459},
    {item:"jeans",price:1200},
    {item:"sunglasses",price:800}
]

const toPay=cart.reduce((acc,currVal)=>(acc+currVal.price),0)

console.log(`Total price to pay: ${toPay}`);