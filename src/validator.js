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
  return (suma % 10 === 0) ? true : false
  },
  maskify(creditCardNumber){
    //separar numeros
    creditCardNumber = creditCardNumber.split("")
    let mascara = ""
    for (let i=0;i<creditCardNumber.length -4;i++){
      //agregar # a la mascara
      mascara += "#"
    }
    //concatenar mascara con los ultimos 4 digitos
    mascara += creditCardNumber.slice(-4).toString().replace(/,/g, "")
    return mascara
  }
};

export default validator;
