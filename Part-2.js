// ============================== How Javascript Work ==============================
/*

console.log(this);
console.log(window);
console.log(firstName);
var firstName = "Sachin";


CODE => COMPILE => EXECUTE

Compilation Phase --> Tokenizing/Lexing
                  --> Parsing
                  --> Code Generation
                  
    Tokenizing/Lexing --> Breaking Codes into Small chunks
    Parsing --> Understand the code and abstract it into AST.
    Code Generation --> Convert the code into Executable code








--> According to ECMA srcipt documentation, there should be 2 thing --> Early Error Checking.
                                                                    --> Determining Appropriate Scope for variable. 
                                                                                ==> Global Scope
                                                                        -------------------------------------------------
                                                                        | {window}                                      |
                                                                        | this : window                                 |
                                                                        | firstName : undefined                         |
                                                                        |                                               |
                                                                        | firstName : "Sachin"                          |
                                                                        |                                              |
                                                                        |                                                |
                                                                        |                                               |
                                                                        |                                               |
                                                                        |                                               |
                                                                        -------------------------------------------------


--> To do the Above two step Parsing the code has to done.

--> Code Execution Phase --> In Javascript code execute inside "Execution Context" OR "Global Execution Context"

--> Global Execution Context --> Creation Phase
                             --> Code Execution Phase  
    
--> Global Memory --> window = {} --> window is an object provided by browser
                  --> this = window
                  --> firstName = undefined --> In above code variable is called before declaring it.

--> JavaScript is also known as Lexical Scope Language.
                             
--> JavaScript is Single Threaded & Synchronous Programming Language.
        --> Synchronous --> Unless the first line of code is Executed, the next line of code will not execute.

--> 
*/

// ============================== How Javascript Work with Function Declaration ==============================

/*
--> Code
        console.log(this);
        console.log(window);
        console.log(fullName);
        console.log(myFunc);

        function myFunc() {
                console.log("this is function");
        }
        var fullName = "Sachin"
        console.log(fullName);


--> Output
        Window {window: Window, self: Window, document: document, name: '', location: Location, …}
        Window {window: Window, self: Window, document: document, name: '', location: Location, …}
        undefined
        ƒ myFunc(){
                console.log("this is function");
        }
        Sachin

--> In function Declaration, we use function keyword before declaring the function. And when we use function keyword, the whole function code store in block of space .

--> Global Execution Context gets stored in Stack, And it will automatically POP when all the code from global scope executed.
*/

// ============================== FUNCTION EXECUTION CONTEXT ==============================
/*
--> Whenever we call function, for that function new execution context creates which is called as "Function Execution Context".
--> Parameter of function are also treated as variable. In function execution Context's memory creation phase, the function's parameter are also allocated with the memory having value provided while calling the function in argument.
--> These parameter's memory allocation done before the Variable's memory allocation present inside the function.

--> CODE
     ==>var foo = "foo";
        console.log(foo);

        function getFullName(firstName, lastName){
                console.log(arguments);
                let var1 = "var inside function"
                console.log(var1);
                const fullName = firstName +" "+ lastName;
                return fullName;
        }

        const personName = getFullName("Sachin", "Singh");
        console.log(personName);

--> OUTPUT
    ==> foo
        Arguments(2) ['Sachin', 'Singh', callee: ƒ, Symbol(Symbol.iterator): ƒ]0: "Sachin"1: "Singh"callee: ƒ getFullName(firstName, lastName)length: 2Symbol(Symbol.iterator): ƒ values()[[Prototype]]: Object
        var inside function
        Sachin Singh
 */

// ============================= SCOPE CHAIN / LEXICAL ENVIRONMENT =============================
// --> When we call any variable, if the data is present in that scope/block then it will print and if the data is not present then javascrip will will for that data in parent scope/block.


// ============================= Closures =============================

//  Example 1

// function outer(firstName, lastName){
//         function inner(){
//                 console.log(firstName, lastName);
//         }
//         return inner;
// }
//  const answer = outer("pawan", "jadhav")

// answer();

// --> When we Function returns a Function, then it will return with all the present variable in lexical environment. 
// --> Or we can say that, when function returns then it will take the local memory while returning.

// Example 2

// function hello(x){
//         var a = "varA";
//         const b = "varB";
        
//         return function(){
//                 console.log(a,b,x);
//         }
// }

// const app = hello("varX");

// app();

// Example 3

// function myFunc(power){
//         return function(number){
//                 return number ** power;
//         }
// }
// const square = myFunc(2);
// const app = square(5);
// console.log(app);

// Example 4

// function closuresApplication(){
//         var counter = 0;
//         return function(){
//                 if(counter < 1){
//                         console.log("This Function is Called");
//                         counter++;
//                 }else{
//                         console.log(`This Function is Called ${counter + 1} Time.`);
//                 }
//         }
// }

// const app = closuresApplication();

// app();
// app();

// ============================= HOW TO USE JS FILE IN HTML =============================
// use <script> in <Head>
// use <script> in <Body>
// use async attribute in <script>
// use defer attribute in <script> --> this is best

// ============================= DOM (Document Object Modal) =============================
// --> Browser provide "window" object and "document" object inside it.

// getElementById --> We can use getElementById to select element only by Id.

// querySelector --> We can use getElementById to select element by class name, id name and tag name.

// querySelectorAll --> We can use getElementById to select all the element by class name and tag name.

// textContent --> To get All the Text value Store in a Element even which is Hidden

// innerText --> To get all the visible Text value store in Element.

// =========================== change style with js ===========================

// const heading = document.querySelector("#done")
// console.log(heading);

// heading.style.border = "20px solid #4ad23c"

// =========================== Get and Set Attributes ===========================

// getAttribute --> to get the value of the attribute
// setAttribute --> to new attribute and its value.

