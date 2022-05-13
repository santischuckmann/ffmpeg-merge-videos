const concatFirstVideos = require('./firstVideos')
const concatSecondVideos = require('./secondVideos')
const finalConcat = require('./finalConcat')

const processTxts = [
  "primerproceso.txt",
  "segundoproceso.txt",
  "ultimoproceso.txt",
]

const executeProgram = (first, second, last) => {
  first(processTxts[0])
  if (first(processTxts[0]) == 0) {
    second(processTxts[1])
    if (second(processTxts[1]) == 0) {
      last(processTxts[2])
      if (last(processTxts[2]) == 0) {
        return "Tareas realizadas satisfactoriamente"
      } else {
        return "Fallo en el ultimo video"
      }
    } else {
      return "Fallo en el segundo video"
    }
  } else {
    return "Fallo en el primer video";
  }
}

console.log(executeProgram(concatFirstVideos, concatSecondVideos, finalConcat));

