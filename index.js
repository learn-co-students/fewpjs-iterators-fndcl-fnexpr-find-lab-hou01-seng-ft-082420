const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
 let winner = array.find(obj => obj.result == "W")
 return winner ? winner.year : undefined
}
