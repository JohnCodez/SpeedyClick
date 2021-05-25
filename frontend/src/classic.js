// Classic Gamemode //

function classic() {
    classicButton = document.getElementById('classic')
    classicButton.remove()
    scoreBoardTitle.remove()
    timeTitle.remove()
    inGame = true

    let timeNew = document.createElement("input")
    timeNew.id = "time"
    timeNew.type = 'number'
    timeNew.disabled = true
    timeNew.step = '0.1'
    timeNew.draggable = false
    timeBox.append(timeNew)
    let time = document.getElementById('time')
    
    let scoreNew = document.createElement("input")
    scoreNew.id = "score"
    scoreNew.type = 'number'
    scoreNew.disabled = true
    scoreNew.draggable = false
    currentScoreBox.append(scoreNew)
    let score = document.getElementById('score')

    setColors()

    for (let i = 0; i < startingBoxes; i++) {
        fullBoxes.push(getRandomBoxNumber())
    }
    for (let i = 0; i < gridSize; i++) {
        let tag = document.createElement("div")
        tag.id = i
        tag.className = 'gridbox'
        tag.draggable = 'false'
        tag.style.outlineColor = colorTheme[1]
        if (fullBoxes.includes(i)) {
            tag.style.backgroundColor = colorTheme[0]
        } else {
            tag.style.backgroundColor = colorTheme[2]
        }
        grid.append(tag)
        gridbox[i].addEventListener('mousedown', clicked )
    }
    score.value = 0
    
    // Time Control
    time.value = startTime
    const decreaseTime = setInterval(() => {
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


classicButton.addEventListener( 'click', classic )
classicButton.addEventListener( 'mouseenter', () => {
    classicButton.style.cursor = `url(${cursorPointer}), pointer`
})