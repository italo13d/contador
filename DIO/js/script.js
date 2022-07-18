var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0
let button = document.querySelector(".button");
 

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
    
function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
