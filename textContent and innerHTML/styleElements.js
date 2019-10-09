/*
we can use the element.style.prop to change properties of elements on the web page:
example html:
<button = id = "toggleList>" hide list </button>
<div class ="list">
<p class ="description">Things that are purple:</p>
<input type="text" class ="description">
<button class ="description">change list description</button>
<ul>
    <li>grapes</li>
    <li>amethyst</li>
    <li>lavender</li>
    <li>plums</li>
</ul>
</div>

to hide the above div:
const listDiv = document.querySelector(".list");
listDiv.style.display = "none";

to show it again 
listDive.style.display = "block";

to add an element to the DOM:
use append.childNode(childElement)
consider the HTML section below:
<ul>
    <li>grapes</li>
    <li>amethyst</li>
    <li>lavender</li>
    <li>plums</li>
</ul>
selecting ul and appending an li as a child, the li will appear as the last li item in the li list. Eg

Select the parent element (ul in this case)
    let ul = document.getElementsByTagName("ul")
    this will select the elements with tag name ul (there is only one in this case)
    this element has an array of containing only one item the ul, this can be accessed at index 0 so
    ul should be declared as:
        ul = document.getElementsByTagName("ul").[0]
then
    li = document.createElement("li");
    li.textContent = "new list item n";
    ul.appendChild(li;) #appends it to the DOM

***********************
removing elements
************************
using: Node.removeChild(childElement): 
******************************************
Parameters: This method accepts single parameter child 
which is mandatory. It represents the node which need to be remove.
It returns a node object which represents the removed node, or null if the node doesn’t exist.
 eg;
var list = document.getElementById("myList");   // Get the <ul> element with id="myList"
list.removeChild(list.childNodes[0]);           // Remove <ul>'s first child node (index 0)

Before removing:                            After removing:
    Coffee                                      Tea
    Tea                                         Milk
    Milk

 using parentNode to traverse the DOM
 * ***********************************************
 * we can use parent.removeChild(nodeToRemove) 
 * this means we need to access the parent note first in order to remove its child nodes eg
 *      let paragraph = document.getElementById("myParagraph");
 *      theParent = paragraph.parentNode;
 * parent.removeChild(paragraph); // removes the paragraph element.
 * this means you have to have a reference to the parent too, this can be done by using
 * Element.ParentNode property these are the steps then:
 * 
 * step 1. Get the paragraph element:  let paragraph = document.getElementById("myParagraph");
 * step 2. Get th paragraph´s parent node and assign it to a variable parent: let parent = paragraph.parentNode
 * step 3. Remove the paragraph element: parent.removeChild(paragraph);
 *  
 * use the example.html file to pracice. Delete one of the list items
    */

const divList = document.querySelector(".list");
const listUl = divList.querySelector("ul");

//add the event listener to the listUl (a parent of the li we cant to delete)

listUl.addEventListener("click", (event) => {
    if(event.target.tagName == ("BUTTON")){
        let li = event.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li); }
   });
   

/*************************************************************************
 * ************************************************************************
 * practicing with the change list description button
 * ************************************************************************/
   
const buttonDescription = document.querySelector("button.description");
console.log(buttonDescription)
buttonDescription.addEventListener("click", () => {
    const inputText = document.querySelector("input.description");
    const paragraphDescr = document.querySelector("p.description");
    paragraphDescr.textContent = inputText.value;
    inputText.value = "";
})
 

