let counted = 0;
let number = document.getElementById("count");

function add() {
  counted = counted + 1;
  number.innerText = counted;
}
let abort = number.value;
let saved = document.getElementById("save");
function saving() {
  if (counted > 0) {
    saved.innerText += counted + "-";
    counted = 0;
    number.innerText = 0;
  } else {
    alert("NO PASSENGER ENTERED, PLEASE ENTER PASSENGERS FIRST!!!");
  }
}
console.log("saved",saved.value)
function reset(){
    counted = 0;
    number.innerText = "-";
    saved.innerText = null
}