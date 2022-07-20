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

//==================== For Loop In Javascript ====================

// let fruits = ["apple","mango","banana","grapes"]
// let fruits2 = []
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i].toUpperCase())
// }
// for(let i=0;i<fruits.length;i++){
//     fruits2.push(fruits[i].toUpperCase())
// }
// console.log(fruits2)

//==================== While Loop In Javascript ====================

// let fruits = ["apple","mango","banana","grapes"]
// let i = 0
// while(i<fruits.length){
//     console.log(fruits[i]);
//     i++
// }

//====================Do While Loop In Javascript ====================

// let fruits = ["apple","mango","banana","grapes"]
// let i = 0
// do {
//     console.log(fruits[i]);
//     i++
// }
// while(i<fruits.length)

//==================== Important Tip for Reference Data Type ====================
    // Always use Const To create Reference Data Type, its very usefull ang 90% of developer use const to create Reference Data Type
        // eg:
            // const fruits = ["apple","mango","banana","grapes"]


//=================== For Of Loop In Javascript ====================
// for of loop --> for of loop  return the value of array.

// let fruits = ["apple","mango","banana","grapes"]
// for(fruit of fruits){
//     console.log(fruit.toUpperCase());
// }
    
//=================== For In Loop In Javascript ====================
// for in loop --> for in loop return the index of the array.

// let fruits = ["apple","mango","banana","grapes"]
// for(index in fruits){
//     console.log(fruits[index]);
// }


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

// --> we can call the function before declaring it for eg:
// hello();
// function hello(){
//     console.log("hello world!")
// }
// --> but in Function Expression And Arrow Function it is not Possible, this will show the error. 


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
// --> accessing any value of variable from function if the variable is not present then it will check in the parent function/object for that variable and print it. this is called as lexical scope  

// ================================= Block Scope And Functional Scope =================================

// --> Block Scope --> Let and Const are the Block Scope --> Declared variable by let and const can be called inside block"{}" but cannot called outside the block "{}"
// {
//     let firstName = "Sachin"
//     console.log(firstName);
// }
// console.log(firstName);
// {
//     const firstName = "Sachin"
//     console.log(firstName);
// }
// console.log(firstName);

// --> Functional Scope --> var is the Functional Scope --> declared variable by var can be called inside block as well as ouside the block "{}".
// {
//     var firstName = "sachin"
// }
// console.log(firstName)
// {
//     var firstName = "sachin"
// }
// console.log(firstName)

// ===================================== Default Parameters ==================================
// --> before 2015 we are using following for defining default parameter --> 
// function myApp(a, b){
//     if(typeof b === "undefined"){
//         b=1
//     }
//     return a+b;
// }

// let ans = myApp(4, 5)
// console.log(ans)

// --> but after 2015 we started using following for defining default parameter.-->
// function myApp(a, b=1){
//     return a+b;
// }

// let ans = myApp(4)
// console.log(ans)

// ======================== Rest Parameter ========================
// --> Rest Parameter --> JavaScript Rest Parameters provides us with a way to declare a function which can take indefinite number of arguments, which are available as an array. In simple language, we can define JavaScript function with Rest Parameters which doesn't have a fixed number of parameters and can take any numbers of arguments when it is called.
//  Eg 1:
// function myApp(a, b, ...c){
//     console.log("value of A is :", a);
//     console.log("value of B is :", b);
//     console.log("value of C is :", c);
// }
// myApp(2,3,4,5,6,7,8,9);
    
//  Eg 2
// function addAll(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total = total + number;
//     }
//     return total;
// }
// const ans = addAll(4,5,6,7,9,55);
// console.log(ans);

// ======================== Parameter Destructoring ========================

// const person ={
//     "name" : "Sachin",
//     "age" : 22,
//     "gender" : "Male",
// }

// function getDetails(obj){
//     console.log(obj.name)
//     console.log(obj.age)
//     console.log(obj.gender)
// }

// --> After Using Destructoring
// function getDetails({name, gender, age}){
//     console.log(name);
//     console.log(gender);
//     console.log(age);
// }

// getDetails(person)

// ========================= CallBack Function ===========================

// function myFunc(name){
//     console.log("In this Function we will Callback the another Function.");
//     console.log("Hello World");
//     console.log(`Your Name is ${name}`);
// }
// function myFunc1(callback){
//     callback("Sachin");
// }
// myFunc1(myFunc)

// ======================= Function Returning Function ==============================

// function myFunc(){
//     function hello(){
//         console.log("hello")
//     }
//     return hello;
// }

// const ans = myFunc();
// ans();

// ======================= For-Each Method ==============================
// --> We can also create anonymus function inside foreach method.
// const numbers = [4,5,9,3,6];

// function multiplyBy2(number, index){
//     console.log("Index is", index);
//     console.log(`${number}*2 = ${number*2}`);
// }

// for(let i = 0;i < numbers.length;i++){
//     multiplyBy2(numbers[i], i)
// }

// numbers.forEach(multiplyBy2)
// numbers.forEach(function(number, index){
//     console.log("Index is", index);
//     console.log(`${number}*2 = ${number*2}`);
// });

// ======================= MAP Method ==============================
// --> Map method always take input as return and store the data as new array
    // map() creates a new array from calling a function for every array element.
    // map() calls a function once for each element in an array.
    // map() does not execute the function for empty elements.
    // map() does not change the original array.

// const numbers = [1,6,8,9,0];
// const square = function(number){
//     return number * number
// }
// const data = numbers.map((number)=>{
//     return number*number
// })
// console.log(data);
// ============================
// const users = [
//     {firstName : "Sachin" ,Age:22},
//     {firstName : "Anand" ,Age:21},
//     {firstName : "Krishna" ,Age:23},
//     {firstName : "Sumit" ,Age:21}
// ];
// const userNames = users.map((user)=>{
//     return user.firstName;
// });
// console.log(userNames)

// =========================== FILTER Method ========================
// --> filter() method always return boolean value and store it on new array only when it pass the test.
// map() does not execute the function for empty elements.
// map() does not change the original array.

// const numbers = [1,2,3,4,5,6];

// const evenNumbers = numbers.filter((number)=>{
//     return number%2===0;
// })
// console.log(evenNumbers)
    
// =========================== REDUCE Method ========================
// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.

// const numbers = [1,2,3,4,5,6];

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// })
// console.log(sum);

// input : 1,2,3,4,5,6
// accumulator    currentValue     return
// 1                  2              3
// 3                  3              6
// 6                  4              10
// 10                 5              15
// 15                 6              21

// / =================Real Life Example
// const userCart = [
//     {productId:1, ProductName:"Mobile", Price:17000},
//     {productId:1, ProductName:"Laptop", Price:52000},
//     {productId:1, ProductName:"TV", Price:22000},
// ]

// const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
//     return totalPrice + currentProduct.Price;
// }, 0)
// console.log(totalAmount);

// =========================== SORT Method ========================
    // The sort() sorts the elements of an array.
    // The sort() overwrites the original array.
    // The sort() sorts the elements as strings in alphabetical and ascending order.
// const numbers=[3,9,65,766,900,6522];

// const sort = numbers.sort((a,b)=>{
//     return a-b;
// });
// console.log(sort);

// -->How it Works
// suppose a=3 , b=9
// if a-b = (negative number), then they will not change position.
// if a-b = (Positive number), then they will interchange the position.

//=================Real Life Example
// const userCart = [
//     {productId:1, ProductName:"Mobile", Price:17000},
//     {productId:2, ProductName:"Laptop", Price:52000},
//     {productId:3, ProductName:"TV", Price:22000},
//     {productId:4, ProductName:"TV", Price:12000},
//     {productId:5, ProductName:"TV", Price:32000},
//     {productId:6, ProductName:"TV", Price:122000},
// ];

// const priceHighToLow = userCart.slice(0).sort((a,b)=>{
//     return b.Price-a.Price;
// });
// const priceLowToHigh = userCart.slice(0).sort((a,b)=>{
//     return a.Price-b.Price;
// });
// console.log(priceHighToLow);
// console.log(priceLowToHigh);


// =========================== FIND Method ========================

// const users=[
//     {id:1, userName:"Sachin"},
//     {id:2, userName:"Sumit"},
//     {id:3, userName:"Piyush"},
//     {id:4, userName:"Himanshu"},
//     {id:5, userName:"Abhishek"},
//     {id:6, userName:"Sanjay"},
// ];

// const userDetail = users.find((user)=>user.id===3);

// console.log(userDetail);

// =========================== EVERY Method ========================
// --> Every method always return boolean value. and check the condition for each and every value of array.

// const numbers = [2,4,6,8,10];

// const ans = numbers.every((number)=>number%2===0);

// console.log(ans);

//=================Real Life Example

// const userCart = [
//     {productId:1, ProductName:"Mobile", Price:17000},
//     {productId:2, ProductName:"Laptop", Price:52000},
//     {productId:3, ProductName:"TV", Price:22000},
//     {productId:4, ProductName:"TV", Price:12000},
//     {productId:5, ProductName:"TV", Price:32000},
//     {productId:6, ProductName:"TV", Price:122000},
// ];

// const checkPrice = userCart.every((productPrice)=>productPrice.Price >= 10000);

// console.log(checkPrice);


// =========================== SOME Method ========================
// The some() method checks if any array elements pass a test (provided as a function).
// The some() method executes the function once for each array element:
    // If the function returns true, some() returns true and stops.
    // If the function returns false, some() returns false and stops.
// The some() method does not execute the function for empty array elements.
// The some() method does not change the original array.

// const numbers = [3,5,8,9];

// const ans = numbers.some((number) => number % 2 === 0);

// console.log(ans);

//=================Real Life Example

// const userCart = [
//     {productId:1, ProductName:"Mobile", Price:17000},
//     {productId:2, ProductName:"Laptop", Price:52000},
//     {productId:3, ProductName:"TV", Price:22000},
//     {productId:4, ProductName:"TV", Price:12000},
//     {productId:5, ProductName:"TV", Price:32000},
//     {productId:6, ProductName:"TV", Price:122000},
// ];

// const some = userCart.some((cart) => cart.Price <15000);

// console.log(some);


// =========================== FILL Method ========================
// --> fill(value, start index, end index);

// const myArray = [1,2,3,4,5,6,7,8,9];

// myArray.fill(69, 4, 9);

// console.log(myArray);

// =========================== SPLICE Method ========================
// --> splice([start index], [number of item to be delete], [number of item to be inserted])
// --> splice method is use to insert or delete or both in an array.
// const myArray = ["item1","item2","item3"]
// console.log(myArray);
// // Delete
// myArray.splice(1,1);

// // Insert
// myArray.splice(1,0,"new Item");

// // Insert/Delete
// myArray.splice(2,1,"NewItem3");

// console.log(myArray);

// =========================== ITERABLES ========================
// --> On which we can use for-of loop are Iterables --> strings, Arrays
// string
// const firstName = "Sachin";

// for(let char of firstName){
//     console.log(char);
// };
// array
// const items = ["item1","item2","item3"];
// for(let item of items){
//     console.log(item);
// };
// =========================== ARRAY LIKE OBJECT ========================
// --> on which we can use length properties and also we can access with the index. --> strings
// const firstName = "Sachin";
// console.log(firstName.length);
// console.log(firstName[2]);

// =========================== SETS ========================
// --> it is iterables
// --> stores data
// --> it also has its own methods
// --> no index based access
// --> order is not gauranteed
// --> duplicates are not allowed

// const numbers = new Set([1,2,3]);
// console.log(numbers)
// ------------ ADD METHOD IN SET ------------

// const numbers = new Set();
// numbers.add(1)
// numbers.add(2)
// numbers.add(["item1", "item2"])
// numbers.add(["item1", "item2"])
// console.log(numbers)

// --> In above example Set will add the two same array  because the memory location of both array are different. 
// --> from JavaScript perspective if two array having same data then also it will define as different because the memory location are different.

// ------------ HAS METHOD IN SET ------------
// const numbers = new Set();
// // numbers.add(1)
// numbers.add(2)
// numbers.add(["item1", "item2"])
// if(numbers.has(1)){
//     console.log("1 is Present");
// }else{
//     console.log("1 is not present");
// }

// =========================== MAPS OBJECT ========================
// --> In Object the Type of key are always in string or symbol, but In Map Object te Type of Key can be anything

const person = new Map();

person.set("Name", "Sachin");
person.set("Age", 23);
person.set(1, "Always number One");
person.set(true, "Speaks true")
person.set([1,2,3], "onetwothree")

console.log(person);

// To get the value of key in Map Object
console.log(person.get(1));

// for loop
for(let key of person.keys()){
    console.log(key, typeof key);
}

// direct for of loop on Map Object
for(let [key, value] of person){
    console.log(key,':', value);
}

// we can set key value pairs while defining Map
const person1 = new Map([["Name", "Sachin"],["Age", 23]])
console.log(person1);

