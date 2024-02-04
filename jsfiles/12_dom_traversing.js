// get the parent of the paragraph. <p></p> tag. 

// find the paragraph first
let firstpara = document.querySelector(".firstpara");
// now find the parent of the paragraph , by using parentNode attribute
const maindiv = firstpara.parentNode;

console.log(maindiv); // this will show the div which contains the paragraph.

console.log(maindiv.innerHTML); // this will show the paragraph inside the div



//2. getting the nextElement of a node. using 
// nextElementSibling

let supportlink = document.querySelector(".current");
console.log(supportlink);
console.log(supportlink.innerHTML);


// gettting or traversing to the next sibling. from the current node. 

var nextsibling =  supportlink.nextElementSibling;
console.log(nextsibling);
console.log(nextsibling.innerHTML);

// printing all the next sibling till the last one. from the current element or node. 

var nextsibling =  supportlink.nextElementSibling;
while(nextsibling)
{
  console.log(nextsibling.innerHTML);
  nextsibling = nextsibling.nextElementSibling;
}
