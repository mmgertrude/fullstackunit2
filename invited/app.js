const form = document.getElementById("registrar"); //to hold a reference to the form element
const input = form.querySelector("input"); // holds the form´s input element

const mainDiv = document.querySelector(".main");
const ul = document.getElementById('invitedList');

const div = document.createElement("div");
const filterLabel = document.createElement("label");
const filterCheckbox = document.createElement ("input");


filterLabel.textContent = "Hide those who haven´t responded";
filterCheckbox.type = 'checkbox';
div.appendChild(filterLabel);
div.appendChild(filterCheckbox);
mainDiv.insertBefore(div, ul);

filterCheckbox.addEventListener("change", (e) => {
    const isChecked = e.target.checked;
    const lis = ul.children;
    if (isChecked){
        for (let i = 0; i < lis.length; i++){
        let li = lis[i];
        if (li.className === "responded"){
            li.style.display = "";
        }else{li.style.display = "none";}
    }
        } else {for (let i = 0; i < lis.length; i++){
            let li = lis[i];
            li.style.display = "";
        }
        }

})






/*create an event handler that submits the input value to the form
the form is not being submitted to any remote server and i dont want the 
form to reload, so i cancel the default form behaviour of reloading
using preventDefault() method */

function createLI(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = text;
    li.appendChild(span);
    const label = document.createElement("label");
    label.textContent = "Confirmed";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    label.appendChild(checkbox);
    li.appendChild(label);
    return li;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    /*append the input name to the ul of invities
    first get the input value from the element input and select the ul */
    if (input.value !== ""){
    const text = input.value;
    input.value = "";
    const li = createLI(text);
    ul.appendChild(li);

    const editButton = document.createElement("button");
    editButton.textContent = "edit";
    li.appendChild(editButton);

// create a button to remove a name
    const removeButton = document.createElement("button");
    removeButton.textContent = "remove";
    li.appendChild(removeButton);}
}); 

ul.addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON"){
        const li = e.target.parentNode;
        const ul = li.parentNode;

        /*in the if statement below, you can 
        replace e.target with button for easier readability */
        if (e.target.textContent === "remove"){
            ul.removeChild(li);

        } else if (e.target.textContent === "edit"){
            const span = li.firstElementChild;
            const input =document.createElement("input")
            input.type="text";
            input.value = span.textContent;
            li.insertBefore(input, span);
            li.removeChild(span);
            e.target.textContent = "save"

        } else if (e.target.textContent === "save"){
            const input = li.firstElementChild;
            const span =document.createElement("span")
            span.textContent = input.value;
            li.insertBefore(span, input);
            li.removeChild(input);
            e.target.textContent = "edit"}

        
    }
        
})

ul.addEventListener('change', (e) =>{
    console.log(e.target.checked);
    const checkbox = event.target;
    const checked = checkbox.checked;
    const listItem = checkbox.parentNode.parentNode;

        if(checked){
            listItem.className = 'responded';
                    }
            else{listItem.className = '';
                }

});  



//  script files are usually at the bottom
// however if moved to the top, the app may not work
//to fix this always enclose ALL your script code in an 
// eventListener that responds to the "DOMContentLoaded" event 
//  and the script as your eventhandler ie

// document.addEventListener("DOMContentLoaded", () => {
//     indent all your JavaScript code in here
// })
  
// we can refactor the program(make the code better yet it still gives same output)
// this can be done by removing repeated statements
//the click event handler on the ul can be refactored as: (and it works)

/*
ul.addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON"){
        const li = e.target.parentNode;
        const ul = li.parentNode;

        in the if statement below, you can 
        replace e.target with button for easier readability 
        function removeName(){
            ul.removeChild(li);
        }
        function editName(){
            const span = li.firstElementChild;
            const input =document.createElement("input")
            input.type="text";
            input.value = span.textContent;
            li.insertBefore(input, span);
            li.removeChild(span);
            e.target.textContent = "save"
        }
        function saveName(){
            const input = li.firstElementChild;
            const span =document.createElement("span")
            span.textContent = input.value;
            li.insertBefore(span, input);
            li.removeChild(input);
            e.target.textContent = "edit"
        }
        if (e.target.textContent === "remove"){
            removeName();
        } else if (e.target.textContent === "edit"){
            editName();
        } else if (e.target.textContent === "save"){
            saveName();   
        }

        
    }
        
})

*/
/*************************************************
the above function can be further simplified as follows:
*************************************************/

// ul.addEventListener("click", (e) => {
//     if(e.target.tagName === "BUTTON"){
//         const li = e.target.parentNode;
//         const ul = li.parentNode;
//         const action = e.target.textContent;

//         const nameActions = {
//             remove:() => {ul.removeChild(li);},
//             edit:() => {
//                 const span = li.firstElementChild;
//                 const input =document.createElement("input");
//                 input.type="text";
//                 input.value = span.textContent;
//                 li.insertBefore(input, span);
//                 li.removeChild(span);
//                 e.target.textContent = "save";},
//             save: () => {
//                 const input = li.firstElementChild;
//                 const span =document.createElement("span")
//                 span.textContent = input.value;
//                 li.insertBefore(span, input);
//                 li.removeChild(input);
//                 e.target.textContent = "edit";},}
//        //select and run action in buttions name
//        nameActions[action]();
//             }
        
        
// })








//************************************************ */
// the function createLI can be refactored as: (doesnot work though)

// function createLI(text){
//     function elementCreater(elementName, property, value){
//         const element = document.createElement("elementName");
//         element[property] = value; 
//         return element;
//     }
//     const li = document.createElement("li");
    
//     const span = elementCreater("span", "textContent", text);
//     li.appendChild(span);

//     const label = elementCreater("label", "textContent", "Confirmed");
//     const checkbox = elementCreater("input", "type", "checkbox" );
    
//     label.appendChild(checkbox);
//     li.appendChild(label);
//     return li;
// }
  
  
  
  
  
  