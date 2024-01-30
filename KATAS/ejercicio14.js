// Crea una función llamada rollDice() que reciba como parametro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! Busca información sobre la función de javascript Math.random()

const rollDice = (num) => {
  let min = 1
  let max = Math.floor(num)

  return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(rollDice(6))
