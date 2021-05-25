function playTime() {
    let timeNew = document.createElement("input")
    timeNew.id = "time"
    timeNew.type = 'number'
    timeNew.disabled = true
    timeNew.step = '0.1'
    timeNew.draggable = false
    timeBox.append(timeNew)
    let time = document.getElementById('time')

    time.value = startTime
    const decreaseTime = setInterval(() => {
        // console.log(startTime)
        if (inGame == false) {
            stopTime()
        } else if (time.value != 0) {
            time.value = Math.round(((time.value - 0.01) + Number.EPSILON) * 100) / 100
            finishedTime = time.value
        } else {
            stopTime()
            gameEnd()
        }
    }, 10)
    
    function stopTime() {
        clearInterval(decreaseTime)
    }
}