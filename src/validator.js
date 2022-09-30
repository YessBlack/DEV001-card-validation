const validator = {
  isValid(creditCardNumber) {
    //Numero de tarjeta al reverso
    const arrNumerosReverso = creditCardNumber.split('').reverse()

    //Array con operacion aplicada a indices pares
    const nuevoArray = []

    for(let i = 0; i < arrNumerosReverso.length; i++) {
      //Encontrar cuales son los indices pares
      if(i % 2 !== 0) {
        let el = arrNumerosReverso[i] * 2

        if(el > 9) {
          //separar numeros y sumar
          let arrDigitos = el.toString().split('')
          let suma = 0
          for(let i = 0; i < arrDigitos.length;i++) {
            suma += parseInt(arrDigitos[i])
          }
          //Agregar los elementos al nuevo arreglo
          nuevoArray.push(suma)
        }else{
          nuevoArray.push(el)
        }
      }else {
        nuevoArray.push(arrNumerosReverso[i])
    }
  }

  //suma y comprobacion del modulo 10
  let suma = 0
  for ( let i=0; i < nuevoArray.length; i++ ){
    suma += parseInt(nuevoArray[i])
  }

  (suma % 10 === 0) ? true : false
  },
  maskify(){

  }
};

export default validator;
