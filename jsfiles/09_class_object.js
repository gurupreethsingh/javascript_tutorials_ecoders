// syntax of making class, object, static field, static methods, private methods with # symbols in front of them. 

// class MyClass {

//     // Constructor
//     constructor() {
//       // Constructor body
//     }

//     // Instance field / non static member
//     myField = "foo";
//     // Instance method / non static function
//     myMethod() {
//       // myMethod body
//     }

//     // Static field /  static member 
//     static myStaticField = "bar";
//     // Static method
//     static myStaticMethod() {
//       // myStaticMethod body
//     }

//     // Static block or static funtion.
//     static {
//       // Static initialization code
//     }

//     // Fields, methods, static fields, and static methods all have
//     // "private" forms
//     #myPrivateField = "bar";
//   }


// class can also be assigned to an expression. 

const employee = class Employee{
    // employee  class code.
}


// // creating a software to store information about students. 

// class Student{
//     // default constructor runs on its own , as soon as we create the object, no need to invoke.
//     constructor(name, age, course)
//     {
//        this.name = name;
//        this.age = age;
//        this.course = course;
//        console.log(`Student ${this.name}, age ${this.age}, course taken ${this.course}`);
//     }

//     // creating a separate function inside the classs. 
//     // if its inside no need to use the function key word to make the function. 

//     showdetails = ()=>{
//         console.log(`Student name - ${this.name} \nStudent's Age - ${this.age}, \nCourse opted - ${this.course}.`)
//     }
// }

// // creating the first student object using the constructor of the class.
// const student1 =new Student("raj" , 20 , "MERN");

// // printing the details of the student using student1 refernce variable. 
// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.course);

// // invoking the showdetails function using the refernce varaible. 

// student1.showdetails();


// const s2 =new Student("raju" , 21 , "DS");
// s2.showdetails();



// making a kettle class. 
// class Kettle{
//    constructor(model, price, quantity)
//    {
//     this.model = model;
//     this.price = price;
//     this.quantity = quantity;
//     console.log(`New Kettle added to the Database.`)
//    }

//    showdetails()
//    {
//     console.log(`Kettle model number - ${this.model}\nKettle price - ${this.price}\nKettle quantity ${this.quantity}`)
//    }
// }

// // make the first kettle object 
// k1 =new  Kettle("Philips" , 2000, 50);
// k2 =new  Kettle("Bosch" , 3000, 150);
// k3 =new  Kettle("Usha" , 4000, 100);

// k1.showdetails();
// k2.showdetails();
// k3.showdetails();




// making a bank atm software. 

class Bank
{
    constructor(name, address, balance)
    {
        this.name = name; 
        this.address = address;
        this.balance = balance;
        console.log(`Account Created for ${this.name}.`)
    }

    showbalance()
    {
        console.log(`Account holder - ${this.name}\nAccount Balance - ${this.balance}.`);
    }

    // deposit function. 
    deposit(amount)
    {
        if(amount > 0)
        {
            this.balance = this.balance + amount;
            console.log(`${amount} Successfully deposited.`);
            this.showbalance();
        }
        else{
            console.log("Amount should be greater than zero to make the deposite.")
        }
    }

    widthdraw(amount)
    {
        if(amount <= this.balance)
        {
            this.balance = this.balance-amount;
            console.log(`${amount} successfully withdrawn.`);
            this.showbalance();
        }
        else{
            console.log("Insufficient balance.");
            this.showbalance()
        }
    }
}

const p1 =new Bank("Raj" , "Bangalore" , 5000);
p1.showbalance();
p1.deposit(10000);
p1.deposit(-5000);
p1.widthdraw(30000);
p1.widthdraw(3000);

const p2 =new Bank("Raju" , "Canada" , 15000);
p2.showbalance();
p2.deposit(10000);
p2.deposit(-5000);
p2.widthdraw(30000);
p2.widthdraw(3000);




// inheritance , using the extends keyword. 
class Axis extends Bank{
    // no need to write any code. 
}

const p3 = new Axis("Mahesh" , "USA" , 50000);
p3.showbalance();
p3.deposit(10000);
p3.deposit(-5000);
p3.widthdraw(30000);
p3.widthdraw(3000);


// same constructor or function in super class as that of in child class . then we will use the super. keyword to access the constructor or the function of the super class. or else we would have invoked the constructor of the child class. 
class Cat{
    constructor(name)
    {
        this.name = name;
    }

    speak()
    {
        console.log(`${this.name}, makes cat sound`);
    }
}

class Dog extends Cat
{
    speak()
    {
        // this function is going to call the super class function speak() using the super. keyword.

        // super.speak();
        console.log(`${this.name}, makes Dog sound`);
    }
}

const animal1 = new Dog("tommy");
animal1.speak(); // tommy makes dog sounds