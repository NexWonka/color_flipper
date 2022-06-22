import './style.css'

let el = document.querySelector('.container')
let text = document.querySelector('.text');
let btn = document.querySelector('.btn')
let change = false

function changeColor() {
  if (change) {
    el.style.backgroundColor = '#fff'
    text.style.color = '#000'
    change = false
  } else {
    el.style.backgroundColor = '#000'
    text.style.color = '#fff'
    change = true
  }
};

changeColor();

btn.addEventListener('click', changeColor)