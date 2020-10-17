// const testVar = {}

// function testFunc() {
//   return "hi"
// }


const superbowlWin = (array) => {
let result = array.find(winOrLoss => winOrLoss.result == "W")
return result ? result.year : undefined
}