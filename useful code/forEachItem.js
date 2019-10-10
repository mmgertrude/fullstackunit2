function calculate_gpa (student_grades){
   let grade_total = 0;
    for (i = 0; i < student_grades.length; i+=1){
      if (!([1,2,3,4].includes(student_grades[i]))){
        console.log(`invalid grade ${student_grades[i]}`)
        console.log("can't complete calculation");
        break;
      }else {grade_total+= student_grades[i];}
    }
  const gpa = (grade_total/student_grades.length);
  return gpa;
}

      
  
let reggie_grades = [ 4, 4, 3, 4];
const gpa_reggie = calculate_gpa(reggie_grades);
console.log(gpa_reggie);

let dave_grades =[ 1, 2, 3, 2]
const gpa_dave = calculate_gpa(dave_grades);
console.log(gpa_dave);


//alterntive solution:

function calculate_gpa2 (student_grades){
  let grade_total2 = 0;
  let num_of_grades = student_grades.length;
  for (let i=0; i<num_of_grades; i++){
      let grade = student_grades[i];
      if(grade < 1 || grade > 4){
          console.log(`invalid grade ${student_grades[i]}`);
          return "Cant´t complete calculation";
        }else {
          grade_total2 += student_grades[i];
        }
      }
  const gpa2 = (grade_total2/num_of_grades);
  return gpa2;
}
    


console.log(calculate_gpa2(reggie_grades));

let dave_grades2 =[ 1, 2, 3, 2]
console.log(calculate_gpa2(dave_grades2));

//task: Remove duplicates of an array and return an array of only unique elements
let names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
let uniquenames = [];
for (let i = 0; i < names.length; i++){
  if (!(uniquenames.includes (names[i]))){
    uniquenames.push(names[i]);  }
}
//console.log(uniquenames);


//TASK: Given a string, reverse each word in the sentence 
let mystring = "Will this work?, tell me all about it"
let splitIt = mystring.split("");
let reverseIt = splitIt.reverse();
let joinIt = reverseIt.join("");
console.log(joinIt);

// a function for the above:
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString(mystring));
