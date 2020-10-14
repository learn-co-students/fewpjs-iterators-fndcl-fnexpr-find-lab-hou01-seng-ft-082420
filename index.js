const testVar = {}

function testFunc() {
  return "hi"
}
const superbowlWin = (recordArray) => {
  const winningRecord = recordArray.find(record => record.result === 'W')
  return winningRecord ? winningRecord.year : undefined
}