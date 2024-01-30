// Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada removeItem que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) llame a la función anteriormente creada findArrayIndex y obten el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.

// Finalmente retorna el array.

// De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.

function findArrayIndex(array, text) {
  for (const name of array) {
    if (name === text) {
      return array.indexOf(name)
    }
  }
}

const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]
const variable = 'Anakin'
const prueba = findArrayIndex(mainCharacters, 'Anakin')

const removeItem = (array, text) => {
  let newArray = []
  const valor = findArrayIndex(array, text)
  for (const person of array) {
    newArray.push(person)
  }
  newArray.splice(valor, 1)
  console.log(newArray)
}

removeItem(mainCharacters, 'Reys')
