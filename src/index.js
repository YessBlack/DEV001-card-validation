import validator from './validator.js';

const $ = (selector) => document.querySelector(selector)

const showAlertDanger = () => {
  setTimeout(() => {
    $('.alert-danger').classList.remove('hide')
  },2000);
  setTimeout(() => {
    $('.alert-danger').classList.add('hide');
  }, 5000);
}
const showAlertSuccess = () => {
  setTimeout(() => {
    $('.group-form').disabled = true;
    $('.alert-success').classList.remove('hide')
    $('.card').classList.add('blur')
    $('.section-form').classList.add('blur')
    $('.alert-success').classList.remove('hide');
  }, 2000);
}
$('#form').addEventListener('submit', (e) => {
  e.preventDefault()
  const data = Object.fromEntries(new FormData(e.target));

  (validator.isValid(data.number))
  ? showAlertSuccess()
  : showAlertDanger();

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
