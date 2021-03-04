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
  if (b === 0) {display.textContent = "IMPOSSIBURU"}
  return a / b;
}
function operate(a, x, b) {
  if (x == 'add') {
    let y = addition(a, b).toFixed(4);
    return +y;
  }
  else if (x == 'sub') {
    let y = subtract(a, b).toFixed(4);
    return +y;
  } 
  else if (x == 'mul') {
    let y = multiply(a, b).toFixed(4);
    return +y;   
  } 
  else if (x == 'divi') {
    let y = divide(a, b).toFixed(4);
    return +y;
  }   
}
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
const numPad = document.querySelectorAll(".numbers");
numPad.forEach((numPad) => {
  numPad.addEventListener('click', (e) => {
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
    if (e.target.getAttribute('id') == 'ac') {
      clearStorage();
    }
    if (e.target.getAttribute('id') == 'eq') {
      if (storage.operator === "") {return};
      storage.registerB = +storage.input.join("");
      display.textContent = operate(storage.registerA, storage.operator,
        storage.registerB);
      storage.input = [""]
      storage.registerA = operate(storage.registerA, storage.operator,
        storage.registerB);
    }
    if (e.target.getAttribute('id') == "add") {
      if (storage.registerA != 0) {
        display.textContent = operate(storage.registerA, storage.operator, +storage.input.join(""))
        storage.registerA = operate(storage.registerA, storage.operator, +storage.input.join(""))
        storage.input = [""]
        storage.operator = "add"
      }
      else {
        storage.registerA = +storage.input.join("");
        storage.input = [];
        storage.operator = "add";
        display.textContent = "";
      }
    }
    if (e.target.getAttribute('id') == "minus") {
      if (storage.registerA != 0) {
        display.textContent = operate(storage.registerA, storage.operator, +storage.input.join(""))
        storage.registerA = operate(storage.registerA, storage.operator, +storage.input.join(""))
        storage.operator = "sub"
        storage.input = [""]
      }
      else {
        storage.registerA = +storage.input.join("");
        storage.input = [];
        storage.operator = "sub";
        display.textContent = "";
      }
    }
    if (e.target.getAttribute('id') == "multi") {
      if (storage.registerA != 0) {
        display.textContent = operate(storage.registerA, storage.operator, +storage.input.join(""))
        storage.registerA = operate(storage.registerA, storage.operator, +storage.input.join(""))
        storage.input = [""]
        storage.operator = "mul"
      }
      else {
        storage.registerA = +storage.input.join("");
        storage.input = [];
        storage.operator = "mul";
        display.textContent = "";
      }
    }
    if (e.target.getAttribute('id') == "divi") {
      if (storage.registerA != 0) {
        display.textContent = operate(storage.registerA, storage.operator, +storage.input.join(""))
        storage.registerA = operate(storage.registerA, storage.operator, +storage.input.join(""))
        storage.input = [""]
        storage.operate = "divi"
      }
      else {
        storage.registerA = +storage.input.join("");
        storage.input = [];
        storage.operator = "divi";
        display.textContent = "";
      }
    }
  })
})

//keyboard eventlisteners
