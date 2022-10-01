import validator from './validator.js';

const $ = (selector) => document.querySelector(selector)

$('#form').addEventListener('submit', (e) => {
  e.preventDefault()
  const data = Object.fromEntries(new FormData(e.target));

  (validator.isValid(data.number))
  ? alert('Tarjeta valida')
  : alert('Tarjeta invalida')

  $('#number').value = validator.maskify(data.number)

  alert(validator.maskify(data.number))

})

