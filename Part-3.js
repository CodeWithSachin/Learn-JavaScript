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
// const intertvalId = setInterval(()=> {
//         const red = Math.floor(Math.random() * 126);
//         const green = Math.floor(Math.random() * 126);
//         const blue = Math.floor(Math.random() * 126);

//         const rgb = `rgb(${red},${green},${blue})`;

//         body.style.background = rgb;
// }, 1000);

// button.addEventListener("click", () => {
//         clearInterval(intertvalId);
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
// const heading10 = document.querySelector(".headin10")

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
// it will store in microservice task untill the GEC completed.Priority of microservice task is greater than Queue Stack. 


// const bucket = ["rice", "salt", "vegetables", "masala", "oil"];

// const friedRice = new Promise((resolve, reject) => {
//     if (bucket.includes("rice") && bucket.includes("salt") && bucket.includes("vegetables")) {
//         resolve("Fried Rice");
//     } else {
//         reject("Connot Prepare Fried Rice");
//     }
// })

// friedRice.then((data) => {console.log("Enjoy eating", data)}).catch((error) => {console.log(error)})


