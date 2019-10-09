/*w e can access the HTML elements types, classes and attributes and then change them
eg
1) for the HTML section:
<input type="text" class ="description">

    input.type // this returns text
    input.className // this returns description

    change the type as follows:
    input.type = "checkbox"
    
2) for the html section:
    <p class ="description">Things that are purple:</p>
    we can change the above paragraph to have a title say "list description"
    p.document.querySelector("p.description") //NOTE no space between p and .
    p.title = "list description"

3)Select the <input> element with the ID linkName and store its value in the variable inputValue
<input type="text" id="linkName">

    Ans: var inputValue = document.querySelector("#linkName").value;


*/
