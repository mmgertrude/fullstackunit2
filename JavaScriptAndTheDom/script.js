// create a constant that will hold the element that was selected by its Id:
const myHeading = document.getElementById("myHeading");

// create a function that will do something to the selected element:
headingChanger = () => myHeading.style.color="red";

// use the event listener property on the element.
//when it "hears" a click, it will execute the function 
myHeading.addEventListener("click",headingChanger);

/*********************************************** */
// create a constant that will hold the element that was selected by its Id:
const headButton = document.getElementById("headButton");

// create a function that will do something to the selected element:
buttonHeadingChanger = () => myHeading.style.color="red";

// use the event listener property on the element.
//when it "hears" a click, it will execute the function 
headButton.addEventListener("click",buttonHeadingChanger);

/*********************************************** */

// create a constant that will hold the element that was selected by its Id:
const myButton = document.getElementById("myButton");

// create a function that will do something to the selected element:
myButtonChanger = () => myButton.style.color="red";

// use the event listener property on the element.
//when it "hears" a click, it will execute the function 
myButton.addEventListener("click",myButtonChanger);

/*********************************************** */

// create a constant that will hold the element that was selected by its Id:
const myTextInput = document.getElementById("myTextInput");
const changeHeadColor = document.getElementById("changeHeadColor"); 

// create a function that will do something to the selected element:
userColor = () => myHeading.style.color= myTextInput.value;

// use the event listener property on the element.
//when it "hears" a click, it will execute the function 
changeHeadColor.addEventListener("click",userColor);

/** Select multiple elements using getElementsByTagName eg p, ul,
 * This will return an array of all the elemements with the specified tag names***** */

const myListItems = document.getElementsByTagName("li");

for (let i = 0; i<myListItems.length; i+=1){
    myListItems[i].style.color= "blue";
}

mylist = document.querySelectorAll("li")
document.write(mylist)
