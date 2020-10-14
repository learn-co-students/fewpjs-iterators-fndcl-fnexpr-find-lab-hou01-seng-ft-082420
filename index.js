document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM Loaded")
})
const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (array) => {
//  array.find(obj => obj.result == "W")
  let result = array.find(obj => obj.result == "W")
  // console.log(result.year)
  if (result != undefined){
  return result.year
  } else {
    return result
  }
}
