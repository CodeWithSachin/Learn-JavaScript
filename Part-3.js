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

const body = document.body;
const button = document.querySelector("button");
const intertvalId = setInterval(()=> {
        const red = Math.floor(Math.random() * 126);
        const green = Math.floor(Math.random() * 126);
        const blue = Math.floor(Math.random() * 126);

        const rgb = `rgb(${red},${green},${blue})`;

        body.style.background = rgb;
}, 1000);

