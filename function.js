
// function sayMyName(){
//     console.log("S")
//     console.log("U")
//     console.log("M")
//     console.log("I")
//     console.log("T")
// }
// sayMyName()


// function addTwoNumber(number1, number2){
//     console.log(number1+number2)
// }
// addTwoNumber(3,4)


// function addTwoNumber(number1, number2){
    
    // let result = number1 + number2
    // return result
//     return number1 + number2
// }
// const result = addTwoNumber(3 , 5)

// console.log("Result: ", result);


function loginUserMessage(username = "samy"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return '${username} just logged in'
}

// console.log(loginUserMessage("sumit"))
console.log(loginUserMessage("Amit"))



function calculateCarPrice(val1, val2,...num1){
    return num1
}
console.log(calculateCarPrice(200, 400, 500, 2000))

const user = {
    username : "sumit",
    price: 199
}

function handleobject(anyobject){
    console.log('any:name is ${anyobject.username} and price is $ {anyobject.price}');
}
// handleobject(user)
handleobject({
    username: "sam",
    price: 399
}
)

const myNewArray = [200, 400, 300, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(200, 400, 300, 600));