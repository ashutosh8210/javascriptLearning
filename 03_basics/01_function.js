function sum(number1,number2){
    return number1+number2
}

// console.log(sum(4,8))

function userLog(username="Ashu"){
    if(!username){
        console.log("Enter username")
        return
    }
    return `${username} logged in`
}

console.log(userLog("Rahul"))