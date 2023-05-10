const display = document.getElementById('display');
    
function clearDisplay() {
  display.textContent = '';
}

function deleteCharacter() {
  const currentDisplay = display.textContent;
  display.textContent = currentDisplay.slice(0, -1);
}

function appendCharacter(character) {
  display.textContent += character;
}

function calculate() {
  const expression = display.textContent;
  try {
    let result = eval(expression);
    result = result.toFixed(2); 
    display.textContent = result;
  } catch (error) {
    display.textContent = 'Erro';
  }
  }

  function handleKeyPress(key) {
    if (key === 'Delete') {
      clearDisplay();
    } else if (key === 'Backspace') {
      deleteCharacter();
    } else if (/[\d.+\-*/]/.test(key)) {
      appendCharacter(key);
    } else if (key === 'Enter' || key === '=') {
      calculate();
    }
  }
  
  document.onkeydown = function(event) {
    const key = event.key;
    handleKeyPress(key);
  };