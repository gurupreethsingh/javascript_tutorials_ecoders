// 1. function with no parameters. 

// function greet()
// {
//     console.log("Hello programmers");
// }

// greet();

// ///2. function with parameters. 

// function greet(username)
// {
//     console.log(`hello ${username}`);
// }

// greet("ecoders");
// greet();// hello undefined. cos we did not give any username while calling the function. 

// 3. function with default values. 
// function greet(username = "ecoders")
// {
//     console.log(`Hello ${username}`);
// }

// greet("Raju");    //Hello Raju
// greet();        //Hello ecoders


// // 4. function expressions. 
// let sum = function(a,b)
// {
//     console.log(a+b);
// }

// sum(10,20); // 30 


// 5. function with return values. 

// function add(a, b)
// {
//     return a+b;
// }

// console.log(add(10, 22));
// let result = add(20, 30);
// console.log(result);


// 6. arrow functions. 
var add = (a,b) =>{
    // note - when ever you are using brases compulsarily use return keyword.
    return a+b;
}
console.log(add(10,30));


var add = (a,b) => a+b; 
console.log(add(10,30));


// 7. iffe funtion
(function(){
    console.log("hello world");
})();


// 8. inbuilt functions. (map(), filter(), reduce())

var a = [1,2,3,4,5,6,7,8,9,10];
var squares = a.map((eachnumber)=>{
    return eachnumber*eachnumber;
});

console.log(squares);


// 9 . filter function
var a = [1,2,3,4,5,6,7,8,9,10];
var even = a.map((number)=>{
    if(number % 2 == 0)
    return number;
});

console.log(even);

var a = [1,2,3,4,5,6,7,8,9,10];
var even = a.filter((number)=>{
    if(number % 2 == 0)
    return number;
});

console.log(even);

var a = [1,2,3,4,5,6,7,8,9,10];
var odd = a.filter((number)=>{
    if(number % 2 != 0)
    return number;
});
console.log(odd);


// 9. reduce() function. 
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce((result , eachnumber)=>{
    return result + eachnumber;
} , 0);

console.log("The sum is " + sum);


// example2 finding factorial of a number till 5
var numbers = [1, 2, 3, 4, 5];
const multiplication = numbers.reduce((result , eachnumber)=>{
    return result * eachnumber;
} , 1);

console.log("The sum is " + multiplication);