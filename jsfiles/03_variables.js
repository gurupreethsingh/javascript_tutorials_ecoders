// variables are named memory locations , to hold the data, 
// this data can be changed during execution of the program. 

// varaible declaration can be done in java using 3 key words. 
// let
// var
// const

let a;   // declaration.
a = 10;   // initialization. 
console.log(a);

//note : when using let keyword we cannot use the same variable name ones again to declare 
// let a = 30;  // this is not allowed. 

// 2. var keyword. 

var b = 30; 
console.log(b);

var b = 40; 
console.log(b);

// reassignment to the same variable name is possible only if we use the var keyword for declaration.
b = 50;
console.log(b);

// const :- for a const varaible we cannot reassign the value. 
const c = 100;
console.log(c); 
// c = 400;  // this is not allowed. 
