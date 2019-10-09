//using "placeholders" inside strings is called interpolation (bse the value is not known before hand)

function greeter (name){
    return "hello " + name;
}

function agegiver (age){
    return age + " years";
}

const sentence = "<p>" + greeter("Jane") + "</p>";

//using interpolation and template literals:
const sentence2 = `<p> do you wish you were ${agegiver(16)} ?</p>`;

document.querySelector(".interpolation").innerHTML = (sentence + sentence2);

