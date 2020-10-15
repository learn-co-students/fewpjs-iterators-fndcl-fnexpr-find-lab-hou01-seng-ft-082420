const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(array){
  let blah = array.find(function(e){return e.result === "W"})
  return blah == undefined ? undefined : blah.year
}