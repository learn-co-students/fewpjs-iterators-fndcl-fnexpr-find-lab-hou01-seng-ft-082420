const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let win = array.find(entry => entry.result === "W")
  return win ? win.year:undefined
}