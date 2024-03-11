import { plus, minus, devide, multiply } from './methods.js'

const counter = document.querySelector('#counter');

export function addNumberToCounter(el) {
  for (let i = 0; i < el.length; i++) {
    const addNumber = () => {
      if (counter.value == 0 && !counter.value.includes('.')) {
        counter.value = el[i].innerText;
      } else {
        counter.value += el[i].innerText;
      }
    }

    el[i].addEventListener('click', addNumber);
  }
}

export function addOperatorToCounter(el) {
  for (let i = 0; i < el.length; i++) {
    const addOperator = () => {
      if (counter.value.includes(' ')) {
        return;
      }

      counter.value += ` ${el[i].innerText} `;
    }

    el[i].addEventListener('click', addOperator);
  }
}

export function addDotToCounter(el) {
  const addDot = () => {
    const left = counter.value.includes(' ') ? counter.value.slice(0, counter.value.indexOf(' '))
      : counter.value.slice(0, counter.value.length).split('');
    const right = counter.value.slice(counter.value.indexOf(' ') + 3);

    if (!left.includes('.')) {
      counter.value += el.innerText;
    } else if (counter.value.includes(' ') && !right.includes('.')) {
      counter.value += el.innerText;
    }
  }

  el.addEventListener('click', addDot);
}

export function calculateCounter() {
  const left = counter.value.slice(0, counter.value.indexOf(' '));
  const right = counter.value.slice(counter.value.indexOf(' ') + 3);
  const operator = counter.value.slice(counter.value.indexOf(' ') + 1, counter.value.indexOf(' ') + 2);

  if (operator === '+') {
    counter.value = plus(left, right);
  }

  if (operator === '-') {
    counter.value = minus(left, right);
  }

  if (operator === '/') {
    counter.value = devide(left, right);
  }

  if (operator === '*') {
    counter.value = multiply(left, right);
  }
}

export function changeNumber() {
  const leftMinus = counter.value.slice(0, 1);
  const rightMinus = counter.value.slice(counter.value.indexOf(' ') + 3, counter.value.indexOf(' ') + 4);

  const left = counter.value.includes(' ') ? counter.value.slice(0, counter.value.indexOf(' '))
    : counter.value.slice(0, counter.value.length).split('');
  const right = counter.value.slice(counter.value.indexOf(' ') + 3).split('');

  if (!counter.value.includes(' ')) {
    if (leftMinus !== '-') {
      left.unshift('-');
      counter.value = left.join('');
    } else {
      left.shift('-');
      counter.value = left.join('');
    }
  } else {
    if (rightMinus !== '-' && right.length) {
      right.unshift('-');
      counter.value = `${counter.value.slice(0, counter.value.indexOf(' ') + 3)}${right.join('')}`;
    } else {
      right.shift('-');
      counter.value = `${counter.value.slice(0, counter.value.indexOf(' ') + 3)}${right.join('')}`;
    }
  }
}

export function clearCounter() {
  counter.value = 0;
}