// const myNums=[1,2,3,4,5,6,7,8,9,10];

// // const filteredNums=myNums.filter((num)=>num>4);
//  const filteredNums=myNums.filter((num)=>{return num>4});

// console.log(filteredNums);

// const filteredNums2=[];
// myNums.forEach((num)=>{
//     if(num>4){filteredNums2.push(num)}
// })

// console.log(filteredNums2);



const books=[
    {name:"Book one",price:399,published_year:2005},
    {name:"Book two",price:649,published_year:2006},
    {name:"Book three",price:555,published_year:2010},
    {name:"Book four",price:700,published_year:2009},
    {name:"Book five",price:462,published_year:2012},
    {name:"Book seven",price:399,published_year:2003},
    {name:"Book eight",price:499,published_year:1999},
    {name:"Book nine",price:1000,published_year:2019},
    {name:"Book ten",price:899,published_year:2000}
]

const userBooks=books.filter((book)=>(book.price <700))

console.log(userBooks);
