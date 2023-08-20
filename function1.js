
// function sayMyName(){
//  console.log("S")
//  console.log("U")
//  console.log("M")
//  console.log("I")
//  console.log("T")

// }
// sayMyName()


// function addTwoNumbers(number1, number2){
//       console.log(number1 + number2);
// }




function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result:", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} Just logged in`
}
// console.log(loginUserMessage("Sumit"))
console.log(loginUserMessage("sumit"))




const user = {
    username: "Sumit",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 800]));
