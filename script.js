const display = document.querySelector('.result');
const keys = document.querySelectorAll('button');

keys.forEach(key => {
  key.addEventListener('click', () => {
    if (key.textContent === 'C') {
      display.textContent = '0';
    } else if (key.textContent === '=') {
      display.textContent = eval(display.textContent);
    } else {
      if (display.textContent === '0') {
        display.textContent = key.textContent;
      } else {
        display.textContent += key.textContent;
      }
    }
  });
});
