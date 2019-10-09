/*textContent returns the text  content of a node
from the example html below;
<h1 id="myHeading">JavaScript and the DOM</h1>
* we can select the h1 tag like this: let myHeading = document.querySelector("h1")
*we can see the content of the h1 tag: myheading.textContent
*we can change the content: 
myheading.textContent = "this is a new heading"  OR
myheading.innerHTML = "this is a new heading"  

other things that .innerHTML can do:
let ul = document.querySelector("ul")
ul.innerHTMl will show a string of the HTML code within the ul element ie
<li>list item 1</li>
<li>list item 2</li>

if we are to set this string (ie the above li list), then replace the content of ul with 
the HTML you want to put there ie
ul.innerHTML = "<li> red cabbage </li>"

after the above code runs the page will display red cabbage in the place it formerly had list items 1 and 2


example:
(i) Select the <input> element with the ID linkName and store its value in the variable inputValue
(ii) set the text content of the <a> element with the ID link to the value stored in inputValue.

ans:    (i)var inputValue = document.querySelector("#linkName").value;
       (ii) document.querySelector("#link").innerHTML = inputValue

*/