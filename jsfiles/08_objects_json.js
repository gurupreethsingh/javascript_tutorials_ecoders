var student = {name : "raj" , age : 20};

console.log(student);
console.log(student["name"]);
console.log(student.name);

console.log(student.age);
console.log(student["age"]);

// updating values using key. 
student["name"] = "rajesh";
console.log(student);

student.name = "raju";
console.log(student);

// adding new key -value pair.
student.course = "Data science";
console.log(student);

// assigning a function to the json , or object. 

student.showdetails = function(){
    console.log(`Student name - ${this.name}`);
}

console.log(student);
student.showdetails();


// Deleting a key-value pair
delete student.age;
console.log(student);


// list of objects 
let allstudents = [
    {name : "raj" , age : 20},
    {name : "raju" , age : 21},
    {name : "rajesh" , age : 22},
];

console.log(allstudents);
console.log(allstudents[0]);
console.log(allstudents[1]);
console.log(allstudents[2]);

console.log(allstudents[0].name);
console.log(allstudents[0].age);

console.log(allstudents[1].name);
console.log(allstudents[1].age);

console.log(allstudents[2].name);
console.log(allstudents[2].age);