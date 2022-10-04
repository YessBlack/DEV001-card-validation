import validator from './validator.js';

const $ = (selector) => document.querySelector(selector)

$('#form').addEventListener('submit', (e) => {
  e.preventDefault()
  const data = Object.fromEntries(new FormData(e.target));

  (validator.isValid(data.number))
  ? alert('Felicitaciones haz adquirido una suscripcion de 1 año')
  : alert('El pago no se ha podido efectuar, por favor verifica los datos ingresados')

  $('#number').value = validator.maskify(data.number)
})

$('#name').addEventListener('keyup', () => {
  $('.name').innerHTML = $('#name').value.toUpperCase()
})

$('#number').addEventListener('keyup', () => {
  $('.end-number').innerHTML = $('#number').value.slice(-4)
})

$('#month').addEventListener('change', () => {
  $('.month').innerHTML = $('#month').value
})

$('#year').addEventListener('change', () => {
  $('.year').innerHTML = $('#year').value
})
