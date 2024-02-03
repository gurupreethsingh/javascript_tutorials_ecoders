// 1. while loop
// 2. do-while loop
// 3. for loop 
// 4. example for break and continue statment.

// 1. while loop . 

// var i = 1;
// while(i<=10)
// {
//     console.log(i);
//     i = i+1 ;    //  i++
// }

// printing in reverse. 
// var i = 10;
// while(i>=1)
// {
//     console.log(i);
//     i = i-1 ;    //  i--;
// }

// print first 10 squares from 1 to 10 using while loop. 

// var i = 1; 
// while(i <=10)
// {
//     console.log(i*i);
//     i++;
// }

// print the first 10 even numbers. 
// var i = 1; 
// while(i<=10)
// {
//     console.log(2*i);
//     i++;
// }

// print the first 10 odd numbers. 
// var i = 1; 
// while(i<=10)
// {
//     console.log(2*i-1);
//     i++;
// }


// 2. do - while loop. 
// var i = 1; 

// do{
//     console.log(i);
//     i++;
// }while(i<=10);



// var i = 100; 

// do{
//     console.log(i);
//     i++;
// }while(i<=10);

// 3. for loop 
// for( var i = 1;  i<= 10; i++)
// {
//     console.log(i);
// }

// reverse printing using for loop. 
// for( var i = 10;  i >= 1; i--)
// {
//     console.log(i);
// }

// 4. break statement. 

// for( var i = 1;  i<= 10; i++)
// {
//     console.log(i);
//     if(i === 5)
//     {
//         break;
//     }
// }


// 5. continue statement. 
// for( var i = 1;  i<= 10; i++)
// {    
//  if(i === 5)
//     {
//         continue;
//     }
//     console.log(i);
// }

// 6. logical operators , 
// 1. logical and  (&&) 

// for( var i = 1;  i<= 10; i++)
// {    
//  if(i >= 3 && i<=7)  // skips all the numbers from 3 to 7
//     {
//         continue;
//     }
//     console.log(i);
// }



// 2. logical or || operator. 

for( var i = 1;  i<= 10; i++)
{    
 if(i ==3 || i==7)  // skips all the numbers from 3 to 7
    {
        continue;
    }
    console.log(i);
}