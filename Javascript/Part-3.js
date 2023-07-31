// ====================== setTimeout ======================
// setTimeout take function and delay time as input.
// setTimeout is provided by browser and it not block the code, it will let the other code work.

// console.log("Code Started");

// function hello(){
//         console.log("Hello Sachin");
// }

// setTimeout(hello, 3000);

// console.log("Code Ended");


// ====================== setInterval ======================

// const body = document.body;
// const button = document.querySelector("button");
// const intervalId = setInterval(()=> {
//         const red = Math.floor(Math.random() * 126);
//         const green = Math.floor(Math.random() * 126);
//         const blue = Math.floor(Math.random() * 126);

//         const rgb = `rgb(${red},${green},${blue})`;

//         body.style.background = rgb;
// }, 1000);

// button.addEventListener("click", () => {
//         clearInterval(intervalId);
//         button.textContent = body.style.background;
// })

// ====================== CALLBACK DETAILED ======================
// --> When we call function as a argument while calling another function is called as callback function

// --------------- Callback Hell -----------------
// --> multiple of multiple callback function inside callback function is callback hell

// const heading1 = document.querySelector(".heading1")
// const heading2 = document.querySelector(".heading2")
// const heading3 = document.querySelector(".heading3")
// const heading4 = document.querySelector(".heading4")
// const heading5 = document.querySelector(".heading5")
// const heading6 = document.querySelector(".heading6")
// const heading7 = document.querySelector(".heading7")
// const heading8 = document.querySelector(".heading8")
// const heading9 = document.querySelector(".heading9")
// const heading10 = document.querySelector(".heading10")

// setTimeout(()=>{
//         heading1.style.color = "violet"
//         setTimeout(()=>{
//                 heading2.style.color = "violet"
//                 setTimeout(()=>{
//                         heading3.style.color = "violet"
//                         setTimeout(()=>{
//                                 heading4.style.color = "violet"
//                                 setTimeout(()=>{
//                                         heading5.style.color = "violet"
//                                         setTimeout(()=>{
//                                                 heading6.style.color = "violet"
//                                         }, 1000)
//                                 }, 1000)
//                         }, 1000)
//                 }, 1000)
//         }, 1000)
// }, 1000)

// --------------------- Pyramid of doom ----------------------

// function changeText(element, color, time, onSuccess, onError){
//         setTimeout(()=>{
//                 element.style.color = color;
//                 if(onSuccess){
//                         onSuccess()
//                 }else{
//                         onError()
//                         element.style.background = "red";
//                 }
//         }, time);

// }

// changeText(heading1, "violet", 1000, ()=>{
//         changeText(heading2, "violet", 1000, ()=>{
//                 changeText(heading3, "violet", 1000, ()=>{
//                         changeText(heading4, "violet", 1000, ()=>{
//                                 changeText(heading5, "violet", 1000, ()=>{
//                                         changeText(heading6, "violet", 1000, ()=>{
//                                                 changeText(heading7, "violet", 1000, ()=>{
//                                                         changeText(heading8, "violet", 1000, ()=>{
//                                                                 changeText(heading9, "violet", 1000, ()=>{
//                                                                         changeText(heading10, "violet", 1000, ()=>{
//                                                                         },()=>{})
//                                                                 },()=>{console.log("element is not present");})
//                                                         },()=>{console.log("element is not present");})
//                                                 },()=>{console.log("element is not present");})
//                                         },()=>{console.log("element is not present");})
//                                 },()=>{console.log("element is not present");})
//                         },()=>{console.log("element is not present");})
//                 },()=>{console.log("element is not present");})
//         },()=>{console.log("element is not present");})
// },()=>{console.log("element is not present");})

// ============================= PROMISES ============================
// When we declare Promise we use new keyword to declare and status of promise is pending.
// task of promise done by browser and it is asynchronous task.
// it will store in microservice task until the GEC completed.Priority of microservice task is greater than Queue Stack.


// const bucket = ["rice", "salt", "vegetables", "masala", "oil"];

// const friedRice = new Promise((resolve, reject) => {
//     if (bucket.includes("rice") && bucket.includes("salt") && bucket.includes("vegetables")) {
//         resolve("Fried Rice");
//     } else {
//         reject("Cannot Prepare Fried Rice");
//     }
// })

// friedRice.then((data) => {console.log("Enjoy eating", data)}).catch((error) => {console.log(error)})

// ============================= Function Returning PROMISES ============================

// function friedRice() {
//     const bucket = ["rice", "salt", "vegetables", "masala", "oil"];
//     return new Promise((resolve, reject) => {
//         if (bucket.includes("rice") && bucket.includes("salt") && bucket.includes("vegetables")) {
//             resolve("Fried Rice");
//         } else {
//             reject("Cannot Prepare Fried Rice");
//         }
//     })
// }

// friedRice().then((data) => {console.log("Enjoy eating", data)}).catch((error) => {console.log(error)})


// ============================= PROMISES AND SETTIMEOUT ============================

// function myPromise(){
//     return new Promise((resolve, reject)=>{
//         let value = false;
//         setTimeout(()=>{
//             if(value){
//                 resolve()
//             }else{
//                 reject()
//             }
//         }, 2000)
//     })
// }

// myPromise()
//     .then(()=>{console.log("Resolved!!")})
//     .catch(()=>{console.log("Rejected!!");})


// ============================= promise.resolve() & promise chaining ============================

// const myPromise = Promise.resolve(5);
// myPromise.then(value=>{console.log(value)})

// --> then() method always return promise.


// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         value = 5
//         if(value=5){
//             resolve(5)
//         }else{
//             reject()
//         }
//     })
// }

// myPromise().then(value =>{
//     console.log(value);
//     return value = 10
// }).then(value=>{
//     console.log(value);
// })

// ============================= Call back Hell To Flat code using Promise ============================

// const heading1 = document.querySelector(".heading1")
// const heading2 = document.querySelector(".heading2")
// const heading3 = document.querySelector(".heading3")
// const heading4 = document.querySelector(".heading4")
// const heading5 = document.querySelector(".heading5")
// const heading6 = document.querySelector(".heading6")
// const heading7 = document.querySelector(".heading7")
// const heading8 = document.querySelector(".heading8")
// const heading9 = document.querySelector(".heading9")
// const heading10 = document.querySelector(".heading10")

// function changeText(element, text, color, time){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(element){
//                 element.textContent = text;
//                 element.style.color = color;
//                 resolve()
//             }else{
//                 reject("element not found")
//             }
//         },time)
//     })
// }

// changeText(heading1, "one", "red", 1000)
//     .then(()=>{
//     return changeText(heading2, "two", "brown", 1000)
//     })
//     .then(()=>{
//         return changeText(heading3, "three", "orange", 1000)
//     })
//     .then(()=>{
//         return changeText(heading4, "four", "pink", 1000)
//     })
//     .then(()=>{
//         return changeText(heading5, "five", "yellow", 1000)
//     })
//     .then(()=>{
//         return changeText(heading6, "six", "green", 1000)
//     })
//     .then(()=>{
//         return changeText(heading7, "seven", "blue", 1000)
//     })
//     .then(()=>{
//         return changeText(heading8, "eight", "cyan", 1000)
//     })
//     .then(()=>{
//         return changeText(heading9, "nine", "purple", 1000)
//     })
//     .then(()=>{
//         return changeText(heading10, "ten", "violet", 1000)
//     })
//     .catch((error)=>{
//      console.log(error);
//     })


// ============================= Fetch API ============================
// --> Javascript
// const options = {method: 'GET'};

// fetch('https://jsonplaceholder.typicode.com/todos', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// --> Typescript

//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
//       method: 'GET',
//       headers: {}
//     });

//     if (response.ok) {
//       const result = await response.json();
//       console.log(result);
//     }
//   } catch (err) {
//     console.error(err);
//   }

// --> Node Js

// const http = require("https");

// const options = {
//     "method": "GET",
//     "hostname": "jsonplaceholder.typicode.com",
//     "port": null,
//     "path": "/todos",
//     "headers": {}
// };

// const req = http.request(options, function (res) {
//     const chunks = [];

//     res.on("data", function (chunk) {
//         chunks.push(chunk);
//     });

//     res.on("end", function () {
//         const body = Buffer.concat(chunks);
//         console.log(body.toString());
//     });
// });
// console.log("🚀 ~ file: Part-3.js ~ line 296 ~ r̥eq", req)

// req.end();


// ============================= ASYNC AWAIT ============================
// --> When we use async before declaring function then it will always return promise.
// --> async is use to make asynchronous process i.e it will run in background and task is handed to browser.
// --> when we use await it will not let to run the next code and wait until the the task is resolve.

// const URL = "https://jsonplaceholder.typicode.com/todos";

// async function getPosts(){
//     const response = await fetch(URL)
//     const data = await response.json();
//     return data;
// }

// getPosts()
//     .then((getData)=>{
//     console.log("🚀 ~ file: Part-3.js ~ line 317 ~ .then ~ getData", getData)
//     })

