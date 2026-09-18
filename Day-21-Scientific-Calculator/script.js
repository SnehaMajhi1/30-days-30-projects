
const display = document.getElementById("display");

let isDegrees = true;



function backspace() {
  display.value = display.value.slice(0, -1);
}



function addDecimal() {
  if (!display.value.includes(".")) {
    display.value += ".";
  }
}



function calculate() {

  let expression = display.value;

  try {


    if (isDegrees) {

      expression = expression.replace(
        /sin\(/g,
        "sin(" + Math.PI / 180 + "*"
      );

      expression = expression.replace(
        /cos\(/g,
        "cos(" + Math.PI / 180 + "*"
      );

      expression = expression.replace(
        /tan\(/g,
        "tan(" + Math.PI / 180 + "*"
      );
    }

    
    let result = math.evaluate(expression);


    display.value = result;

  } catch {

    
    display.value = "Error";

    setTimeout(() => {
      display.value = "";
    }, 2000);
  }
}

