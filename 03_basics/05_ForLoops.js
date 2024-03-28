const subjects=["Python","Java","JavaScript"]


// for(const sub of subjects){
//     console.log(sub);
// }
// console.log("#####################");

// for(const sub in subjects){
//     console.log(subjects[sub]);
// }



// let bikes=new Map();

// bikes.set('Hunter',"2.0 Lakhs")
// bikes.set('Meteor',"2.9 Lakhs")
// bikes.set('Classic',"2.3 Lakhs")
// bikes.set('Pulsar',"1.8 Lakhs")

// console.log(bikes);

// for(const [key,value] of bikes){
//     console.log(`Price of ${key} is ${value}`)
// }

// const sports=["Cricket","Badminton","Carrom","Football","Gilli Danda"]

// sports.forEach(element => {
//     console.log(`Name of sport is ${element}`)
// });

const result=[
    {
        name:"Anshu",
        marks:"93%"
    },
    {
        name:"Rahul",
        marks:"53%"   
    },
    {
        name:"Akanksha",
        marks:"88%"
    },
    {
        name:"Priti",
        marks:"76%"
    },
    {
        name:"Sonu",
        marks:"85%"
    }
]


result.forEach(detail=>{console.log(`Name of student is ${detail.name} and percentage is ${detail.marks}`);})



