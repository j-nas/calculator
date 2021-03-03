//math functions
function addition(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {return "YOU CAN'T DO THAT"}
  return a / b;
}
function operate(a, x, b) {
  if (x == 'add') {
    return addition(a, b)
  }
  else if (x == 'sub') {
    return subtract(a, b)
  } 
  else if (x == 'mul') {
    return multiply(a, b)    
  } 
  else if (x == 'div') {
    return divide(a, b)
  }   
}
//initial variables for data
function clearStorage() {
  storage.registerA = 0;
  storage.operator = "";
  storage.registerB = 0;
  storage.input = [];
  display.textContent = "";
}
let storage = {
  input: [],
  registerA: 0,
  operator: "",
  registerB: 0,
};
let output = storage.registerA
let display = document.querySelector('#output');
display.textContent = storage.input;
let dec = "."
function checkDec() {
  return dec 
}
//register storage
//keypad outputs
// const numPadButtons {

// }

//button eventlisteners
const numPad = document.querySelectorAll(".numbers");
numPad.forEach((numPad) => {
  numPad.addEventListener('click', (e) => {
    console.log(e.target.getAttribute('id'))
    if (storage.input.length >= 13){
      return;
    }
    if (storage.input.length >= 12 && storage.input.includes(".") == true){
      return;
    }  
    if (e.target.getAttribute('id') == 'one') {
      storage.input.push(1);
      display.textContent = storage.input.join("");
    }
    else if (e.target.getAttribute('id') == 'two') {
      storage.input.push(2);
      display.textContent = storage.input.join("");
    }
    else if (e.target.getAttribute('id') == 'three') {
      storage.input.push(3);
      display.textContent = storage.input.join("");
    }
    else if (e.target.getAttribute('id') == 'four') {
      storage.input.push(4);
      display.textContent = storage.input.join("");
    }
    else if (e.target.getAttribute('id') == 'five') {
      storage.input.push(5);
      display.textContent = storage.input.join("");
    }
    else if (e.target.getAttribute('id') == 'six') {
      storage.input.push(6);
      display.textContent = storage.input.join("");
    }
    else if (e.target.getAttribute('id') == 'seven') {
      storage.input.push(7);
      display.textContent = storage.input.join("");
    }
    else if (e.target.getAttribute('id') == 'eight') {
      storage.input.push(8);
      display.textContent = storage.input.join("");
    }
    else if (e.target.getAttribute('id') == 'nine') {
      storage.input.push(9);
      display.textContent = storage.input.join("");
    }
    else if (e.target.getAttribute('id') == 'zer') {
      storage.input.push(0);
      display.textContent = storage.input.join("");
    }
    else if (e.target.getAttribute('id') == 'dec') {
      if (storage.input.includes(".") == true) {return};
      storage.input.push(".");
      display.textContent = storage.input.join("");
    }
  })
})
const funcs = document.querySelectorAll(".opers")
funcs.forEach((funcs) => {
  funcs.addEventListener("click", (e) => {
    console.log(e.target.getAttribute('id'))
    if (e.target.getAttribute('id') == 'ac') {
      console.log('press AC')
      clearStorage();
    }
    if (e.target.getAttribute('id') == 'eq') {
      if (storage.operator === "") {return};
      storage.registerB = +storage.input.join("");
      display.textContent = operate(storage.registerA, storage.operator,
        storage.registerB);
    }
    if (e.target.getAttribute('id') == "add") {
      if (storage.registerA !== 0) {
        storage.registerA = operate(storage.registerA, storage.operator, 
          storage.registerB)
      }
      else {
        storage.registerA = +storage.input.join("");
        console.log(storage.registerA);
        storage.input = [];
        storage.operator = "add";
        display.textContent = "";
      }
    }
  })
})