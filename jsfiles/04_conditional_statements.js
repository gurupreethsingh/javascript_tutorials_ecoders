// there are 5 conditional statments in js.
// 1 if - else
// 2. if - else if - else
// 3. switch - case 
// 4. break
// 5. continue

// if-else
let a = 30; 
let b = 20; 

if(a<b){
    console.log(`${a} is smaller than ${b}`);
}
else{
    console.log(`${b} is smaller than ${a}`);
}


// 2. if - else if - else
let username ="Rajesh";

if(username == "raj")
{
    console.log(`Access granted to ${username}`);
}

else if(username == "raju")
{
    console.log(`Access granted to ${username}`);
}

else if(username == "rajesh")
{
    console.log(`Access granted to ${username}`);
}
else{
    console.log("Access denied");
}

// 3. switch - case statement. 
let number = 5;

switch(number)
{
    case 1 : {
        console.log(`Nubmer chosen is ${1}`);
        break;
    }
    case 2 : {
        console.log(`Nubmer chosen is ${2}`);
        break;
    }

    case 3 : {
        console.log(`Nubmer chosen is ${3}`);
        break;
    }   
    
    case 4 : {
        console.log(`Nubmer chosen is ${4}`);
        break;
    }

    default:{
        console.log("Wrong input");
    }
}