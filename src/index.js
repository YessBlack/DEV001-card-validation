import validator from './validator.js';

const $ = (selector) => document.querySelector(selector)

$('#form').addEventListener('submit', (e) => {
  e.preventDefault()
  const data = Object.fromEntries(new FormData(e.target))
  if(validator.isValid(data.number)){
    alert('Tarjeta valida')
  }
})
