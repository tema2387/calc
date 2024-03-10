import './style.css'
import { addNumberToCounter, addOperatorToCounter, addDotToCounter, clearCounter, calculateCounter, changeNumber} from './counter.js'

const nums = document.querySelectorAll('#number');
const operators = document.querySelectorAll('#operator');
const dot = document.querySelector('#dot');
const calculateBtn = document.querySelector('#calculate');
const clearBtn = document.querySelector('#clear');
const changeBtn = document.querySelector('#change');

addNumberToCounter(nums);
addOperatorToCounter(operators);
addDotToCounter(dot);
calculateBtn.addEventListener('click', calculateCounter);
clearBtn.addEventListener('click', clearCounter);
changeBtn.addEventListener('click', changeNumber);

