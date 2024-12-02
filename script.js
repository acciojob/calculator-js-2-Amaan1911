//your JS code here. If required.
const display = document.getElementById('display');
let expression = '';

// Add event listeners to buttons
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const id = button.id;

    if (id === 'C') {
      expression = '';
    } else if (id === 'back') {
      expression = expression.slice(0, -1);
    } else if (id === 'equal') {
      try {
        expression = eval(expression);
      } catch {
        expression = 'Error';
      }
    } else {
      expression += button.textContent;
    }

    display.value = expression;
  });
});
