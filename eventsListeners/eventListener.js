const input = document.querySelector("input");
const p = document.querySelector("p.description");
const button = document.querySelector("button");

inputChanger = () => {p.textContent = input.value + ":";
input.value = " ";  //clear the input box text
};


//below is the exercise to do


/* for the html file for this section do the following tasks:
TASK 1: Make each item on the list capitalise when moused over and then go back to lowercase when "moused out"
step 1: select the list of items: */
const listItems = document.querySelectorAll("li");
//console.log(listItems);

//step 2: iterate through each li item and then do the necessary "tasks"
for (let i = 0; i<listItems.length; i++){
    listItems[i].addEventListener("mouseover", () => {
        listItems[i].textContent = listItems[i].textContent.toUpperCase();});
    listItems[i].addEventListener("mouseout", () => {
        listItems[i].textContent = listItems[i].textContent.toLowerCase();});
}
//Notice how new items added to this list are not affected by the event handler? 
//this can be fixed by event bubbling


//EVENT BUBBLING:  
//the above can be rewritten:
//use ancestor element eg the div in which the li
//use an event object to specify which item you want to apply the even

divList = document.querySelector(".list");


divList.addEventListener("mouseover", (event) => {
    if(event.target.tagName == ("LI")){event.target.textContent = event.target.textContent.toUpperCase();
    }
});
divList.addEventListener("mouseout", (event) => {
    if(event.target.tagName == ("LI")){event.target.textContent = event.target.textContent.toLowerCase();
    }
});




