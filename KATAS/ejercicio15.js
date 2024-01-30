// Crea una función llamada swap que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

// Sugerencia de array:

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

const swap = (array, index1, index2) => {
  let list = array.slice()

  let cambio = list[index1]
  list[index1] = list[index2]
  list[index2] = cambio

  return list
}

swap(fantasticFour, 1, 2)
console.log(swap(fantasticFour, 1, 2))
