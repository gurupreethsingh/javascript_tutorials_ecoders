// Section 1. Getting started
// Understanding the Document Object Model in JavaScript

// Section 2. Selecting elements
// getElementById() – select an element by id.
// getElementsByName() – select elements by name.
// getElementsByTagName()  – select elements by a tag name.
// getElementsByClassName() – select elements by one or more class names.
// querySelector()  – select elements by CSS selectors.

// Section 3. Traversing elements
// Get the parent element – get the parent node of an element.
// Get child elements – get children of an element.
// Get siblings of an element – get siblings of an element.


// Section 4. Manipulating elements
// createElement() – create a new element.
// appendChild()  – append a node to a list of child nodes of a specified parent node.
// textContent – get and set the text content of a node.
// innerHTML – get and set the HTML content of an element.
// innerHTML vs. createElement – explain the differences between innerHTML and createElement when it comes to creating new elements.
// DocumentFragment – learn how to compose DOM nodes and insert them into the active DOM tree.
// after() – insert a node after an element.
// append() – insert a node after the last child node of a parent node.
// prepend() – insert a node before the first child node of a parent node.
// insertAdjacentHTML() – parse a text as HTML and insert the resulting nodes into the document at a specified position.
// replaceChild() – replace a child element by a new element.
// cloneNode() – clone an element and all of its descendants.
// removeChild() – remove child elements of a node.
// insertBefore() – insert a new node before an existing node as a child node of a specified parent node.
// insertAfter() helper function – insert a new node after an existing node as a child node of a specified parent node.


// Section 5. Working with Attributes
// HTML Attributes & DOM Object’s Properties – understand the relationship between HTML attributes & DOM object’s properties.
// setAttribute() – set the value of a specified attribute on a element.
// getAttribute() – get the value of an attribute on an element.
// removeAttribute() – remove an attribute from a specified element.
// hasAttribute() – check if an element has a specified attribute or not.


// Section 6. Manipulating Element’s Styles
// style property – get or set inline styles of an element.
// getComputedStyle() – return the computed style of an element.
// className property – return a list of space-separated CSS classes.
// classList property – manipulate CSS classes of an element.
// Element’s width & height – get the width and height of an element.


// Section 7. Working with Events
// JavaScript events – introduce you to the JavaScript events, the event models, and how to handle events.
// Handling events – show you three ways to handle events in JavaScript.
// Page Load Events – learn about the page load and unload events.
// load event – walk you through the steps of handling the load event originating from the document, image, and script elements.
// DOMContentLoaded – learn how to use the DOMContentLoaded event correctly.
// beforeunload event – guide you on how to show a confirmation dialog before users leave the page.
// unload event – show you how to handle the unload event that fires when the page is completely unloaded.
// Mouse events – how to handle mouse events.
// Keyboard events – how to deal with keyboard events.
// Scroll events – how to handle scroll events effectively.
// scrollIntoView – learn how to scroll an element into view.
// Focus Events – cover the focus events.
// haschange event – learn how to handle the event when URL hash changes.
// Event Delegation – is a technique of levering event bubbling to handle events at a higher level in the DOM than the element on which the event originated.
// dispatchEvent – learn how to generate an event from code and trigger it.
// Custom Events – define a custom JavaScript event and attach it to an element.
// MutationObserver – monitor the DOM changes and invoke a callback when the changes occur.


// Section 8. Scripting Web Forms
// JavaScript Form – learn how to handle form submit event and perform a simple validation for a web form.
// Radio Button – show you how to write the JavaScript for radio buttons.
// Checkbox – guide you on how to manipulate checkbox in JavaScript.
// Select box – learn how to handle the select box and its option in JavaScript.
// Add / Remove Options – show you how to dynamically add options to and remove options from a select box.
// Removing Items from <select> element conditionally – show you how to remove items from a <select> element conditionally.
// Handling change event – learn how to handle the change event of the input text, radio button, checkbox, and select elements.
// Handling input event – handle the input event when the value of the input element changes.




/*
section 1 : Dom introduction.
What is Document Object Model (DOM)
The Document Object Model (DOM) is an application programming interface (API) for manipulating HTML documents.

The DOM represents an HTML document as a tree of nodes. The DOM provides functions that allow you to add, remove, and modify parts of the document effectively.

Note that the DOM is cross-platform and language-independent ways of manipulating HTML and XML documents.

Constant	                     Value	               Description
Node.ELEMENT_NODE	               1	    An Element node like <p> or <div>.
Node.TEXT_NODE	                   3	    The actual Text inside an Element or Attr.
Node.CDATA_SECTION_NODE	           4	    A CDATASection, such as <!CDATA[[ … ]]>.
Node.PROCESSING_INSTRUCTION_NODE   7	    A ProcessingInstruction of an XML document, such as <?xml-stylesheet … ?>.
Node.COMMENT_NODE	               8	    A Comment node, such as <!-- … -->.
Node.DOCUMENT_NODE	               9	    A Document node.
Node.DOCUMENT_TYPE_NODE	          10	    A DocumentType node, such as <!DOCTYPE html>.
Node.DOCUMENT_FRAGMENT_NODE	      11	    A DocumentFragment node.


*/




/**
 // Section 2. Selecting elements
// getElementById() – select an element by id.
// getElementsByName() – select elements by name.
// getElementsByTagName()  – select elements by a tag name.
// getElementsByClassName() – select elements by one or more class names.
// querySelector()  – select elements by CSS selectors.
 */


// 1. selecting elements / finding elements by their id. using getElementById() method. 

let heading = document.getElementById("mainheading");
console.log(heading);
console.log(heading.innerHTML);
console.log(heading.textContent);

// to find the node type we use the syntax. 
// node.nodeType
console.log(heading.nodeType);


// 2. finding the element in the html document using getElementByClassName() method.

let mypara = document.getElementsByClassName("mypara");
console.log(mypara);
console.log(mypara.innerHTML);
console.log(mypara.textContent);
// since there is no function to find the element with only one class name we have to use the getElementsByClassName() which finds all the class names. so we will have to use like an array symbol to access the elements of the array , using index values. 
console.log(mypara[0].innerHTML);
console.log(mypara[0].textContent);


if (heading.nodeType === Node.ELEMENT_NODE) {
    // checking if the node is the element node
     console.log(true);
}
else{
    console.log(false);
}

if (mypara.nodeType === Node.ELEMENT_NODE) {
    // checking if the node is the element node
     console.log(true);
}
else{
    console.log(false);
}


 //3. finding elements using getElementsByName() method. 
 var p = document.getElementsByName("secondparagraph");
 console.log(p[0]);
 console.log(p[0].textContent);
 console.log(p[0].innerHTML);


 // 4. find the elements by getElementsByTagName() method. 

 // finding all the li items by the tag name li

 const alllistitems = document.getElementsByTagName("li");
 console.log(alllistitems);
 console.log(alllistitems.innerHTML); // undefined

 console.log(alllistitems[0].innerHTML);
 console.log(alllistitems[1].innerHTML);
 console.log(alllistitems[2].innerHTML);
 console.log(alllistitems[3].innerHTML);

 // using a forEach() loop to print all the list items. 

 // but before using forEach() loop , which works only on arrays. 
 // convert all the list items and store it in an array. 
 let listitemarray = [...alllistitems];

 listitemarray.forEach((eachlistitem)=>{
    console.log(eachlistitem.innerHTML);
 })


 // printing how many p tags are there in the html page. 
 const allparagraphs = document.getElementsByTagName("p");
 const count = allparagraphs.length;

 function countparagraphs(){
    const allparagraphs = document.getElementsByTagName("p");
    const count = allparagraphs.length;
    console.log(count);
    document.writeln(`<p>Total ${count} paragraphs are there in this html page.</p>`)
 }

 
 
 //  5 . finding elements using querySelector() method
 // finding the button by its classname , using querySelecto() method. 
 
 var mybutton = document.querySelector(".mybutton");
 console.log(mybutton);
 console.log(mybutton.innerHTML);


 // finding the button by its id using the querySelector() method. 
 var mybutton = document.querySelector("#countbutton");
 console.log(mybutton);
 console.log(mybutton.innerHTML);



 /*
 6) Attribute selector
To select all elements that have a given attribute, you use one of the following attribute selector syntaxes:

[attribute]
[attribute=value]
[attribute~=value]
[attribute|=value]
[attribute^=value]
[attribute$=value]
[attribute*$*=value]
 */


 // sample code to find elements. 

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Attribute Selectors Examples</title>
//   <style>
//     /* Apply styles to selected elements for demonstration purposes */
//     .selected {
//       color: red;
//       font-weight: bold;
//     }
//   </style>
// </head>
// <body>

//   <!-- Example HTML with different attributes -->
//   <div id="example1" data-attribute="value">Example 1</div>
//   <div id="example2" data-attribute="value other-value">Example 2</div>
//   <div id="example3" data-attribute="other-value">Example 3</div>
//   <div id="example4" data-lang="en">Example 4</div>
//   <div id="example5" data-lang="en-US">Example 5</div>
//   <div id="example6" class="prefix-value-suffix">Example 6</div>
//   <div id="example7" title="substring">Example 7</div>

//   <script>
//     // [attribute]
//     let example1 = document.querySelector('[data-attribute]');
//     example1.classList.add('selected');

//     // [attribute=value]
//     let example2 = document.querySelector('[data-attribute="value"]');
//     example2.classList.add('selected');

//     // [attribute~=value]
//     let example3 = document.querySelector('[data-attribute~="value"]');
//     example3.classList.add('selected');

//     // [attribute|=value]
//     let example4 = document.querySelector('[data-lang|="en"]');
//     example4.classList.add('selected');

//     // [attribute^=value]
//     let example5 = document.querySelector('[data-lang^="en"]');
//     example5.classList.add('selected');

    // [attribute$=value]
//     let example6 = document.querySelector('[class$="suffix"]');
//     example6.classList.add('selected');

//     // [attribute*=value]
//     let example7 = document.querySelector('[title*="substring"]');
//     example7.classList.add('selected');
//   </script>

// </body>
// </html>


//Grouping selectors
// finding all the div and p tags. 
const allelements = document.querySelectorAll("div, p");
console.log(allelements);
console.log(allelements.length);

const itemarray = [...allelements];
itemarray.forEach((eachitem)=>{
    console.log(eachitem.innerHTML);
})


//Combinators
// 1. descendant combinator
// NOTE - use space between the tag names while finding.
// lets find all the anchor(links) tags followed just inside the p tag. 

let links = document.querySelector('p a');
console.log(links);
console.log(links.textContent);
console.log(links.innerHTML);


// 2. child combinators , 
// > symbol is used to find the direct children of the parent element. 
// ul > li ,  will find all the child elements li, of the parent  ul tag. 

let allmonths = document.querySelectorAll('ul > li');
console.log(allmonths);
console.log(allmonths.innerHTML); //  undefined
console.log(allmonths.textContent); // undefined


console.log(allmonths[0].innerHTML); // Accessing the first element
console.log(allmonths[0].textContent);

console.log(allmonths[1].innerHTML); // Accessing the second element
console.log(allmonths[1].textContent);


// use a for loop to iterate through all the elements. 

allmonths.forEach((month) => {
    console.log(month.innerHTML);
});