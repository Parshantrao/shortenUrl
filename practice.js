const { resolve } = require("path");
const {promisify} = require("util")

// function getAllSubstrings(str) {
//     var i, j, result = [];
  
//     for (i = 0; i < str.length; i++) {
//         for (j = i + 1; j < str.length + 1; j++) {
//             result.push(+str.slice(i, j));
//         }
//     }
//     return result;
//   }

//   function makeFunc() {
//     const name = 'Mozilla';
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   const myFunc = makeFunc();
// //   console.log(myFunc)
//   myFunc();


// let str = " world "
// console.log(str.indexOf("hello"))


// let c=4
// let sum = function(a) {
//     console.log('Rajat ' + a)
//     let 

//     return function(b) {
//         return a + b + c
//     }
// }
// let store = sum(2)
// console.log(store(5));


// let obj={
//     name:"Parshant",
//     age:22,
//     address:{
//         street:"42 b",
//         pincode:333029,
//         city:" Surajgarh"
//     },
//     likes:["Cricket","vollyball"],
//     Dob:new Date()
// }
// let str = JSON.stringify(obj)
// console.log(String(obj))

// function foo(){
//     let bool = false
//     return new Promise(function(resolve,reject){
//         if(bool){
//             setTimeout(function(){
//                 resolve(console.log("Promise is resolved!")); // fulfilled
//            }, 3000)
//         }
//         else {
            
//             reject(console.log("Promise is rejected!")); 
          
//         }
        
//     })
// }
// foo()
//     .catch((err)=>err)
//     // .then((result)=>console.log(result))

// const axios = require("axios")
// const option = {
//     method:"get",
//     url:"https://www.google.com"
// }
// axios(option).then(
//     function(result){console.log("result")},
//     function(err){console.log("err")}
// )
// axios(option).then((result)=>console.log("result"))
// .catch((err)=>console.log("error"))

function delay(ms) {
    return new Promise(resolve=>setTimeout(resolve,ms))
  }
  
  delay(3000).then(() => console.log('runs after 3 seconds'));
