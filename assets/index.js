let degreeinput = document.querySelector("input");
let p = document.querySelector("p");
function calcdegree() {
  let degreeval = +degreeinput.value;
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
