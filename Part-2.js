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

--> According to ECMA srcipt documentation, there should be 2 thing --> Early Error Checking
                                                                    --> Determining Appropriate Scope for variable
--> To do the Above two step Parsing the code has to done.

--> Code Execution Phase --> In Javascript code execute inside "Execution Context" OR "Global Execution Context"

--> Global Execution Context --> Creation Phase
                             --> Code Execution Phase  
    
--> Global Memory --> window = {} --> window is an object provided by browser
                  --> this = window
                  --> firstName = undefined --> In above code variable is called before declaring it.

--> 
                             

--> JavaScript is Single Threaded & Synchronous Programming Language.
        --> Synchronous --> Unless the first line of code is not Executed, the next line of code will not execute.

--> 
*/

