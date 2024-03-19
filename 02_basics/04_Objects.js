const member=new Object()

member.id="DTO123"
member.name={firstname:"Ashutosh",
             lastname:"Kumar"}

// console.log(member.id)
// console.log(member.name.firstname)
// console.log(member.name)


const obj1={1:"abc",
            2:"def"}
const obj2={3:"abc",
            4:"def"}

const obj3={...obj1,...obj2}

console.log(obj3)

