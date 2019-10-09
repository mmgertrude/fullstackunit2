// selectors in JS are used to control element behaviour and add funtionality to the page
// eg: 
    //1) read elements content, eg validate the input field text

    //2) modify element contents eg: dynamically replace the heading text
    //   from "Good Morning!" to "Good Afternoon" based on the user's time. 
    //   change a class attribute from is-hidden to is-visible based on a given 
    //   condition. Or completely remove a class attribute (or any attribute) from 
    //   an element if it no longer needs it.

    //3) create new HTML elements. For example, dynamically create a new <li> in a todo list and append it to a <ul>.

    //4) respond to user events. For example, increase the size of a thumbnail image when a user clicks on it, 
    //   or increase a player's score with the click of a button.


/*elements can be selected by ID, class , pseudo-class and tag names.
It's recommended that you do not share the same selector with CSS and JavaScript. 
For instance, if you're selecting an element with JavaScript, avoid relying on a selector that's also used in your CSS.
If a class is going to be used by JavaScript only, it's common to use a dedicated prefix, 
like js-. Consider the following button element:

<button class="btn-lg js-modal">Click Me!</button>

Use the class .btn-lg to apply styling to the button in CSS:

.btn-lg {
  font-size: 2.5em;
  display: block;
}


Use the class .js-modal to target the button and apply functionality with JavaScript:

// assign the element with the class 'js-modal' to the variable 'modalBtn'
var modalBtn = document.querySelector('.js-modal');

// logic to popup the modal on the 'click' event
modalBtn.addEventListener('click', function (event) {
  ...
});

This also makes it easier to change the design of the button using the .btn-lg class, 
without having to worry that it will mess up the modal behavior. 
Likewise, in your JavaScript, you can manage the modal behavior and never break any existing CSS. 
In other words, using the .js- prefix separates your styling classes from your logic classes.

You learned that when selecting an element with JavaScript, it's recommended that you avoid using a selector that's also used in your CSS. It's also common to select an element using a data attribute. For example, let's say that you're showing and hiding a list based on button clicks. Consider the following HTML:

<button class="btn-sm" data-toggle-controller>Toggle Teachers</button>
<ul class="list-teachers" data-toggle-content>
  ...
</ul>

Instead of selecting the <button> and <ul> with JavaScript using their class, select their data- attribute:

// assign the element with the data attribute 'data-toggle-controller' to the variable 'toggler'
var toggler = document.querySelector('[data-toggle-controller]');

// assign the element with the data attribute 'data-toggle-controller' to the variable 'toggledContent'
var toggledContent = document.querySelector('[data-toggle-content]');

This separates concerns: the class has the job of styling, and the data- attribute has the job of providing functionality with JavaScript. That way, if you ever need to change a class name, it's not going to affect the JavaScript.

/********************************************************************* 
Elements, IDs or classes?
/********************************************************************* 
 * Most developers use classes because they are reusable. An element can have several 
    classes assigned to it (for styling and JavaScript behavior), and you can use the 
    same class on multiple elements. It's recommended that you do not share the same 
    class with CSS and JavaScript. Doing so would couple your styling classes with your logic classes, 
    making your code difficult to debug and maintain.

 * If you're sure that only one element needs to match your selector, selecting by ID should be OK. 
    If you're unsure, or think that at some point you might need to share styles or 
    functionality with multiple elements, then it's best to use a class or data-* attribute.

 * Naming classes can be challenging. Developers often use a naming convention like BEM 
    (Block, Element, Modifier) to make their code scalable, reusable and predictable. 
    With BEM, you describe the markup in terms of blocks, elements and modifiers.
    
    example html:
    <ul class="nav">
        <li class="nav__item"><a href="#type">Typography</a></li>
        <li class="nav__item"><a href="#buttons">Buttons</a></li>
        <li class="nav__item--current"><a href="#nav">Navigation</a></li>
    </ul>


   corresponding css:
    .nav {...}
    .nav__item {...}
    .nav__item--current {...}

    *The class nav is considered a 'block' -- an independent component of the page
    *The class nav__item is an 'element' that belongs to the nav block only
    *nav__item--current is a 'modifier' class that makes changes to a block and its elements

    Finally, you learned that it's common to use a dedicated prefix (or hook), like js-, 
    if a class will be used by JavaScript only. This helps distinct between classes used 
    for styling and those for JavaScript functionality. For example:

    <ul class="nav js-site-nav">
    ...
    </ul>
*/

/*
exercises:
Consider the following HTML:

    <nav>
        <ul>
            <li><a href="index.html">Portfolio</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>

Complete the JavaScript code below by writing a selector that targets all <a> elements 
inside the <nav> element:

var expectedLinks = document.querySelectorAll("....");
Ans: var expectedLinks = document.querySelectorAll("nav li a");

***********************************************************************************

Consider the following HTML code:

<button type="button" class="close" data-close="modal">
Use an attribute selector to assign an element with a data attribute of data-close to the variable closeBtn:

var closeBtn = document.querySelector('');
Answer: var closeBtn = document.querySelector('button[data-close]');
***********************************************************************************



Complete the code by setting the variable listItems to refer to a collection. 
The collection should contain all list items in the <ul> element with the ID of rainbow.

    var listItems;
    var colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];

    for(var i = 0; i < colors.length; i ++) {
    listItems[i].style.color = colors[i];    
    }

    Ans:    
    var container = document.querySelector("#rainbow");
    var listItems = container.querySelectorAll("li");

   
i)select all links inside the <nav> element and assign them to the variable navigationLinks.   
ii)select all links inside the unordered list with the ID gallery and assign them to the variable galleryLinks
iii) select all images inside the footer element and assign them to the variable footerImages.
use the exercise.html file for reference.


Ans:
let navigationLinks = document.querySelectorAll("nav li a");
let galleryLinks = document.querySelectorAll("#gallery a");
let footerImages = document.querySelectorAll("footer img");

*/

/******************************************************************
 *
 *
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
*/