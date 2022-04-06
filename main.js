//==================== Array In Javascript ====================
// Array is an ordered Collection of Element

// let fruits = ["Apple", "Banana", "Grapes"]
// let number = [1, 2, 3, 4]
// let mixed = [6,9,88,3.56,"hello", null, undefined]

// console.log(fruits)
// console.log(number)
// console.log(mixed)

// let fruits = ["Apple", "Banana", "Grapes"]
// console.log(fruits)
// fruits[1]="Mango"
// console.log(fruits)
// console.log(Array.isArray(fruits))

// ============================ PUSH/POP and SHIFT/UNSHIFT In Array =========================

// push --> push add element at the last of the Array
// pop --> pop remove the last element of the Array and also return the removed element
// unshift --> unshift Add the Element at the starting of the Array
// shift --> shift remove the last first element of the array and also return the removed element

// let fruits = ["Apple", "Banana", "Grapes"]
// console.log(fruits)
// fruits.push("mango")
// let poppedFruit = fruits.pop()
// console.log(poppedFruit)
// fruits.unshift("mango")
// fruits.shift()
// console.log(fruits)


// ============================ Primitive Vs Reference DATA Type =========================
// Primitive data type --> the value of the Primitive data type store in Stack
// let num1 = 6;
// let num2 = num1;
// console.log(num1)
// console.log(num2)
// console.log("after Incrementing the value of num1")
// num1++;
// console.log(num1)
// console.log(num2)

// Reference data type --> the value of the Reference data type store in Heap
// let array1 = ["item1","item2"]
// let array2 = array1;
// console.log(array1)
// console.log(array2)
// console.log("After adding item in array 1")
// array1.unshift("item3")
// console.log(array1)
// console.log(array2)

//==================== Cloning/ Concatination Array In Javascript ====================

// // Clone in array
// let array1 = ["item1","item2"]
// //First way to clone array --> slice() method --> The slice () method returns a shallow copy of a portion of an array into a new array object selected from start to end ( end not included) where start and end represent the index of items in that array. The original array will not be modified.
// let array2 = array1.slice(0)
// //Second way to clone array --> concatinating blank array with array1 --> concat() method --> The JavaScript concat() method combines two or more item and returns a new item. This method doesn't make any change in the original item.
// let array2 = [].concat(array1)
// //New way to clone array --> spread operator --> Spread operator allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in variable array where there is more than 1 values are expected
// let array2 = [...array1]
// console.log(array1)
// console.log(array2)
// console.log(array1===array2)
// array1.push("item3")
// console.log(array1)
// console.log(array2)

// Concatination of Two Array
// let array1 = ["item1","item2"]
// let array = [ "item3","item4"]
// // First way to concatinate array
// let array2 = array1.slice(0).concat(["item3"])
// // Second way to concatinate array
// let array2 = [].concat(array1, "item 3","item4")
// // New way to Concatinate Array
// let array2 = [...array1, ...array]
// console.log(array2)


//==================== Object In Javascript ====================

// const person = {
//   "name" : "Sachin Singh",
//   "age" : 22,
//   "personal hobbies" : ["Dancing","Coding", "Cricket","Listening Music"]
// }

// console.log(person)

// person["gender"]= "male";

// console.log(person)

// const key = "email";

// person[key]= "sachin0510singh@gmail.com"
// console.log(person)

// =============================Spread Operator in Array=========================
// const arr1 = [1,2,3]

// const arr2 = [5,6,7]

// const newArr = [...arr1, ...arr2]

// console.log(newArr)
// =============================Spread Operator in Object=========================

// const obj1 = {
//   "key1": "value1",
//   "key2": "value2"
// }
// const obj2 = {
//   "key3": "value3",
//   "key4": "value4"
// }

// const newObject = {...obj1, ...obj2}

// console.log(newObject)


// ============================= Object Destructuring=========================
// const band = {
//   "bandName" : "One Direction",
//   "famousSong": "Drag Me Down",
//   "year":2005
// }
// const {bandName:var1, famousSong:var2, ...restprops}= band

// console.log(var1,"-" ,var2, restprops)

// ============================= Object IN  array=========================

// const users =[
//   {userId:1, name:"Sachin", gender:"male"},
//   {userId:2, name:"Adarsh", gender:"male"},
//   {userId:3, name:"krishna", gender:"male"}
// ]

// for(user of users){
//   console.log(user)
// }

// ============================= Object IN  array Destructuring=========================

// const users =[
//   {userId:1, name:"Sachin", gender:"male"},
//   {userId:2, name:"Adarsh", gender:"male"},
//   {userId:3, name:"krishna", gender:"male"}
// ]

// const [{userId, name}, { gender}, {}] = users
// console.log(name, gender, userId)

// ============================= Functions=========================

// function birthdayWish(){
//   console.log("Happy Birthday To You.....................");
// }

// function addTwoNumber(num1, num2){
//   return num1+num2
// }

// const print = addTwoNumber(4,69)
// birthdayWish();
// console.log(print)

// ============================= example of Functions=========================

// function isEven(number){
//   if(Number % 2 === 0){
//     console.log("This is even Number")
//   }else{
//       console.log("This is Odd NUmber")
//   }
// }
// isEven(1)

// ======================================================================

// function findTarget(array, target){
//     for(let i=0;i<array.length;i++){
//         if(array[i]===target){
//             return i
//         }
//     }
//     return -1
// }
// const myArray = [1,5,3,65,95];
// const ans = findTarget(myArray, 95);
// console.log(ans);

// =============================Functions Expression=========================

// const isEven=function(number){
//     if(number % 2===0){
//         console.log("This is Even Number")
//     }
//     else{
//         console.log("This is Odd Number")
//     }
// }
// isEven(5)

// ======================================================================

// const findTarget = function(array, target){
//     for(let i=0;i<array.length;i++){
//         if(array[i]===target){
//             return i
//         }
//     }
//     return -1
// }
// const myArray = [1,5,3,65,95];
// const ans = findTarget(myArray, 95);
// console.log(ans);

// =============================Arrow Functions=========================

// const isEven=(number)=>{
//     if(number % 2===0){
//         console.log("This is Even Number")
//     }
//     else{
//         console.log("This is Odd Number")
//     }
// }
// isEven(5)

// ============================== Short Hnad Arrow Functions ========================================

// const isEven = number => number%2===0;

// console.log(isEven(4))


// =======================================================================

// const findTarget = (array, target)=>{
//     for(let i=0;i<array.length;i++){
//         if(array[i]===target){
//             return i
//         }
//     }
//     return -1
// }
// const myArray = [1,5,3,65,95];
// const ans = findTarget(myArray, 95);
// console.log(ans);


// ====================================Basic Hoisting ===============================

// we can call the function before declaring it for eg:
// hello();
// function hello(){
//     console.log("hello world!")
// }
// but in Function Expression And Arrow Function it is not Possible, this will show the error. 


// ====================================Functions Inside Function===============================

// const app = () =>{
//     console.log("Inside app Function");
//     const hello = ()=>{
//         console.log("Hello World!")
//     }
//     const addNum = (num1, num2) => {
//         return num1+num2;
//     }
//     console.log(addNum(5,64));
//     hello();
// }
// app()

// ====================================Lexical Scope===============================

// function myApp(){
//     var key = "value";
//     const myFunction= ()=>{
//         // var key = "value 69"
//         console.log("Inside myFunction", key);
//     }
//     myFunction();
// }
// myApp();

// accessing any value of variable from function where the variable is not present then it will check 
// in the parent function/object for that variable and print it. this is called as lexical scope  