// Singleton
//object.create


//+++ Object literals +++//

const mySym = Symbol("key1")


const JsUser = {
    name: "Sumit",
    "full name": "Sumit Yadav",
    [mySym]: "myKey1",
    age: 18,
    location: "Delhi",
    email: "sumit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])

// console.log(JsUser[mySym])


// JsUser.email = "sumit@chatgpt.com"
// object.freeze(JsUser)
// JsUser.email = "sumit@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log('Hello Js user, ${this.age}');
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

