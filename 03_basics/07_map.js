const myNums=[1,2,3,4,5,6,7,8,9,10];

// const square=myNums.map((num)=>(num*num))

// console.log(square);

const square=myNums.map((num)=>(num*num)).filter((n)=>(n>40))

console.log(square);