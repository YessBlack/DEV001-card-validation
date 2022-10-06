import validator from './validator.js';

const $ = (selector) => document.querySelector(selector)

//Mostar Alerta de Error
const showAlertDanger = (text) => {
  $('.text-danger').textContent = text
  setTimeout(() => {
    $('.alert-danger').classList.remove('hide')
  },2000);
  setTimeout(() => {
    $('.alert-danger').classList.add('hide');
  }, 5000);
}
//Mostar Alerta de Success
const showAlertSuccess = () => {
  setTimeout(() => {
    $('.group-form').disabled = true;
    $('.alert-success').classList.remove('hide')
    $('.card').classList.add('blur')
    $('.section-form').classList.add('blur')
    $('.alert-success').classList.remove('hide');
  }, 2000);
}
//Recuperar datos del formulario
$('#form').addEventListener('submit', (e) => {
  e.preventDefault()
  const data = Object.fromEntries(new FormData(e.target));

  if(data.number <= 0) {
    showAlertDanger('Por favor ingrese un número válido');
  }else{
    (validator.isValid(data.number))
    ? showAlertSuccess()
    : showAlertDanger('El pago no se ha podido efectuar, por favor verifica los datos ingresados');
  }

  $('#number').value = validator.maskify(data.number)
})

//Eventos keyup
$('#name').addEventListener('keyup', () => {
  $('.name').innerHTML = $('#name').value.toUpperCase()
})

$('#number').addEventListener('keyup', () => {
  $('#number').value = $('#number').value
  .replace(/\s/g,'')
  .replace(/\D/g,'')
  .trim()

  $('.end-number').innerHTML = $('#number').value.slice(-4)
})

$('#month').addEventListener('change', () => {
  $('.month').innerHTML = $('#month').value
})

$('#year').addEventListener('change', () => {
  $('.year').innerHTML = $('#year').value
})
