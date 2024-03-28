let user={
    username:"Ashutosh",
    contact:"4255243",

    welcome:function(){
        console.log(`Hello ${this.username}, Welcome to Library`)
    },

    welcome2:function(){
        console.log(`Hello ${user.username}, Welcome to Library`)
    }
}

// user.welcome()
// user.welcome2()

// user.username="Rahul"

// user.welcome()
// user.welcome2()


// let user1={...user}
// user.username="Rahul"
// user1.welcome()

// user1.welcome2()


// function addTwo(num1,num2){
//     return num1+num2
// }

const addTwo=(num1,num2) =>(num1+num2)

