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
