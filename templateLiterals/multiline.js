const kiwi = "kiwi";
const mango = "mango";
const lemon = `lemon`;
const combinedList = '<ul>'+('<li>' + kiwi + '</li>') + ('<li>' + mango + '</li>') + ('<li>' + lemon + '</li>') + '</ul>';
document.querySelector(".fruits").innerHTML = combinedList;


//demonstrating use of template literals on multiline:
const selery = "selery";
const carrots = "carrots";
const cucumber = `cucumber`;
const vegies = `<ul>
                    <li>selery</li>
                    <li>carrots </li>
                    <li>cucumber </li>
                </ul>`;
document.querySelector(".vegetables").innerHTML = vegies;

