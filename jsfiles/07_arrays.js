// array creation and printing the arrays. 
 var a =  [11,22,33,44,55];
 console.log(typeof(a)); // object


 // printing the entire array.
//  console.log(a);

// printing individual values of the array using index value of the array.
//  console.log(a[0]);
//  console.log(a[1]);
//  console.log(a[2]);
//  console.log(a[3]);
//  console.log(a[4]);
//  console.log(a[5]); // index out of boundary. // undefined

 // priting the array using for loop. 
// for(let i = 0; i<a.length; i++)
// {
//     console.log(a[i]);
// }


// printing the array using while loop. 
// var i = 0;
// while(i< a.length)
// {
//     console.log(a[i]);
//     i++;
// } 


// printing array in revers using for loop. 
// for(let i = a.length-1; i>=0; i--)
// {
//     console.log(a[i]);
// }

// making arrays with different literals
// var a =  [11,2.2, 'a',  "helloworld", null];
// console.log(a);

// Array methods

// 1. adding element at the end of the array using push() function 

// var a =  [11,22,33,44,55];
// console.log(a.length);
// a.push(66);
// console.log(a);
// console.log(a.length);


// 2. removing element from the end of the array. using the pop() function. 
// a.pop();
// console.log(a);

// 3. method to add element at the start of the array using unshift() method. 
// a.unshift(100);
// console.log(a);

// 4. removing element from the start of the array. using shift() function.
// a.shift();
// console.log(a);

// 5. replacing any element in between the array at any index. using splice() method. 


// a.splice(2, 1);   // at 2 index one value was deleted
// console.log(a);
// now to put something/ replace 33 with some other value at index 2
// a.splice(2, 1, 555);
// console.log(a);
// console.log(a.length);


// putting/inserting 3 elements from index 2, also retaining the last 2 elements , 44, and 55 
// var a =  [11,22,33,44,55];
// console.log(a);
// a.splice(2, 1, 100,200,300);
// console.log(a);
// console.log(a.length);


// inserting 3 elements from index 2 , but deleting the last 2 44, and 55
// var a =  [11,22,33,44,55];
// console.log(a);
// a.splice(2, 3, 100,200,300);
// console.log(a);
// console.log(a.length);