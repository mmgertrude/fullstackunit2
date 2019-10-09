
const singleq = 'this is with single quotes';
const doubleq = "this is with double quotes";
const stringLit = `this is a template literal`;
const combineList = ('<p>' + singleq + '</p>') + ('<p>' + doubleq + '</p>') + ('<p>' + stringLit + '</p>');
document.querySelector(".basic").innerHTML = combineList;

