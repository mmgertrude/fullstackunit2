const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const lis = listUl.children;

//create buttons that work for new and existing items
function attachListItemButtons (li){
    //create the buttons
    let up = document.createElement ("button");
    let down = document.createElement ("button");
    let remove = document.createElement ("button");

    //give the buttons class names
    up.className = "up";
    up.textContent = "move item up"

    down.className = "down";
    down.textContent = "move item down"

    remove.className = "remove";
    remove.textContent = "remove item"

    // add the buttons to the list element
    li.appendChild(up);
    li.appendChild(down);
    li.appendChild(remove);

}

addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    //make a call to the button creating function
    attachListItemButtons (li);
    ul.appendChild(li);
    addItemInput.value = '';
  });
  //stopping here will create new items with the 3 buttons but the existing items will not have buttons
  //solution;
  //create and store the buttons in a variable lis; access them using the children property
  // lis has been created up with all the other constants
  //now loop through the list elements calling the attachListItemButtons on each one:


for (let i = 0; i<lis.length; i++){
    attachListItemButtons(lis[i]);
}

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

        if (event.target.className == "remove"){
            let li = event.target.parentNode;
            //access the prev. sibling
            let prevLi = li.previousElementSibling;
            let ul = li.parentNode;
            ul.removeChild(li);
        }
      }
  });


  /*Getting the first and last element child
  use parentNode.firstElementChild  and parentNode.lastElementChild

  create two new constants */
  const firstListItem = listUl.firstElementChild;
  const lastListItem = listUl.lastElementChild; 
  //recall the unordered list is stored in the constant listUl.

  
  //turn the background color of the first and last elenents:
  firstListItem.style.backgroundColor = "pink";
  lastListItem.style.backgroundColor = "forestgreen";




