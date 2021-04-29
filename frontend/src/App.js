// Start //

function start() {
    // Setup
    // console.log("start")
    startButton = document.getElementById('start')
    startButton.remove()
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
    for (let i = 0; i < 16; i++) {
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


startButton.addEventListener( 'click', start )
startButton.addEventListener( 'mouseenter', () => {
    startButton.style.cursor = "pointer"
})

// End //

function gameEnd() {
    // console.log("end")
    let score = document.getElementById('score')
    time.remove()
    grid.style.flexDirection = 'column'
    inGame = false
    inEndMenu = true
    fullBoxes = []
    startTime = gameTime
    for (let i = 0; i < 16; i++) {
        document.getElementById(i.toString()).remove()
    }
    changeColor(grid, colorTheme[2])

    const newFinishedTimeTitle = document.createElement('h1')
    newFinishedTimeTitle.innerText = parseFloat(finishedTime)
    newFinishedTimeTitle.id = 'finished-time-title'
    timeBox.append(newFinishedTimeTitle)
    finishedTimeTitle = document.getElementById('finished-time-title')

    const endText = document.createElement("h1")
    const home = document.createElement("h1")
    endText.innerText = "Score: " + score.value
    endText.id = "endText"
    endText.draggable = false
    home.innerText = "Home"
    home.id = "home"
    home.addEventListener('mouseenter', () => {home.style.cursor = "pointer"})
    home.addEventListener('click', goBackHome)
    grid.append(endText)
    grid.append(home)
}

// Return //

function goBackHome() {
    // console.log("return")
    endText.remove()
    home.remove()
    score.remove()
    finishedTimeTitle.remove()
    inEndMenu = false
    
    const scoreboardTitle = document.createElement('h1')
    scoreboardTitle.innerText = "SCOREBOARD"
    scoreboardTitle.id = 'scoreboard-title'
    currentScoreBox.append(scoreboardTitle)
    scoreBoardTitle = document.getElementById('scoreboard-title')
    
    const newTimeTitle = document.createElement('h1')
    newTimeTitle.innerText = "TIME"
    newTimeTitle.id = 'time-title'
    timeBox.append(newTimeTitle)
    timeTitle = document.getElementById('time-title')
    

    grid.style.flexDirection = 'row'
    let startNew = document.createElement("p")
    startNew.id = "start"
    startNew.innerText = "START"
    startNew.addEventListener( 'click', start )
    startNew.addEventListener( 'mouseenter', () => {
        startNew.style.cursor = "pointer"
    })
    grid.append(startNew)
}