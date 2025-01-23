// // Description
// // The eval() method evaluates or executes an argument.

// // If the argument is an expression, eval() evaluates the expression. If the argument is one or more JavaScript statements, eval() executes the statements.

// // Do NOT use eval()
// // Executing JavaScript from a string is an BIG security risk.

// // With eval(), malicious code can run inside your application without permission.

// // With eval(), third-party code can see the scope of your application, which can lead to possible attacks.

// let n1 = +prompt("Enter First No to calculate");
// let n2 = +prompt("Enter Second No to calculate");
// function sumNos(no1, no2) {
//   return eval(`${no1} + ${no2}`);
// }
// function calcSum(n1, n2) {
//   console.log(sumNos(n1, n2));
// }
// function subNos(no1, no2) {
//   return eval(`${no1} - ${no2}`);
// }
// function calcSub(n1, n2) {
//   console.log(subNos(n1, n2));
// }
// function mulNos(no1, no2) {
//   return eval(`${no1} * ${no2}`);
// }

// function calcMul(n1, n2) {
//   console.log(mulNos(n1, n2));
// }
// function divNos(no1, no2) {
//   return eval(`${no1} / ${no2}`);
// }
// function calcDiv(n1, n2) {
//   console.log(divNos(n1, n2));
// }
// // with defferent way
// // let n1 = +prompt("Enter First No to calculate");
// // let n2 = +prompt("Enter Second No to calculate");
// // let operation = prompt("Enter operation (+, -, *, /)");

// // function calculate(n1, n2, operation) {
// //   return eval(`${n1} ${operation} ${n2}`);
// // }
// // console.log(calculate(n1, n2, operation));

let degreeinput = document.querySelector(".degree");
let degreeval = +degreeinput.value;
let p = document.querySelector("p");
function calcdegree() {
  if (degreeval < 50 && degreeval > 0) {
    p.innerText = `Sorry, you failed`;
  } else if (degreeval >= 50 && degreeval < 65) {
    p.innerText = `Your degree is Acceptable`;
  } else if (degreeval >= 65 && degreeval < 75) {
    p.innerText = `Your degree is Good`;
  } else if (degreeval >= 75 && degreeval < 85) {
    p.innerText = `Your degree is Very Good`;
  } else if (degreeval >= 85 && degreeval <= 100) {
    p.innerText = `Your degree is Excellent`;
  } else {
    p.innerText = `Enter a valid degree`;
  }
}
p.innerText=calcdegree();
