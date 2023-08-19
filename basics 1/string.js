// const name = "Sumit"
// const repoCount = 50

// console.log(name + repoCount + "value")

// console.log('Hello my name is ${name} and my repo count is $ {repocount}');

// const gameName = new string('sumit')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
//  console.log(gameName.toUpperCase());


const gameName = new String('Sumit-Yadav')
console.log(gameName.charAt(2));
console.log(gameName.toUpperCase());
console.log(gameName.length)
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString)


//----trim string----//
const newStringOne = "   Sumit   "
console.log(newStringOne);
console.log(newString.trim());
 
//----Replace string---//
const url = "https://sumit.com/sumit%20yadav"

console.log(url.replace('20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));