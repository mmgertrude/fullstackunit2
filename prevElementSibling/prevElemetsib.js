
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

// comment this out so that i modify i down to remove specific items with a button
//listUl.addEventListener('click', (event) => {
//   if (event.target.tagName == 'BUTTON') {
//     let li = event.target.parentNode;
//     let ul = li.parentNode;
//     ul.removeChild(li);
//   }
// });

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});
  
  
  
  

/**************************************************************************
 * ************************************************************************
Using previousElementSibling and insertBefore:
you will need three nodes:  
    1. the parent 
    2. the sibling
    3. and the reference to the node you want to insert
It is possible to chain the parentNode property to traverse up the DOM, for example
let ancestor = p.parentNode.parentNode.parentNode.
*************************************************************************
 * ************************************************************************
*/
listUl.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        if (event.target.className == "down"){
            let li = event.target.parentNode;
            //access the next sibling
            let nextLi = li.nextElementSibling;
            let ul = li.parentNode;
            if(nextLi){
                ul.insertBefore(nextLi, li);
            }
        }
        if (event.target.className == "up"){
            let li = event.target.parentNode;
            //access the prev. sibling
            let prevLi = li.previousElementSibling;
            let ul = li.parentNode;
            if(prevLi){
                ul.insertBefore(li, prevLi);
            }
        }
      }
  });

/* insertBefore helps rearrange the DOM when we remove and move items: we want to be able
to insert elements between elements not just at the end*
NOTE: items added onto the list cannot be moved up or down! 
this is fixed in allChildren.js inside the allChildren folder

/


/*TASK:
var list = document.getElementsByTagName('ul')[0];

list.addEventListener('click', function(e) {
  if (e.target.tagName == 'BUTTON') {
    
  }
});
The <ul> stored in the variable list has a click event listener that targets each <button> in the list. 
Complete the code to add a class of highlight to a <p> element that's an immediate previous sibling 
of the button being clicked.

here is the reference html:
<p>Things to Learn</p>
            <ul>
                <li><p>Element Selection</p><button>Highlight</button></li>
                <li><p>Events</p><button>Highlight</button></li>
                <li><p>Event Listening</p><button>Highlight</button></li>
                <li><p>DOM Traversal</p><button>Highlight</button></li>
            </ul>
SOLUTION:

var list = document.getElementsByTagName('ul')[0];

list.addEventListener('click', function(e) {
  if (e.target.tagName == 'BUTTON') {
    let prevLi = e.target.previousElementSibling;
    if(prevLi){
      prevLi.className = 'highlight';      ;
            }
  }
});











            */