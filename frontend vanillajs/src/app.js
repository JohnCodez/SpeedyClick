// Start //

function start() {
    // Setup
    // console.log("start")
    startButton = document.getElementById('start')
    startButton.remove()
    inGame = true
    
    let timeNew = document.createElement("input")
    timeNew.id = "time"
    timeNew.type = 'number'
    timeNew.disabled = true
    timeNew.step = '0.1'
    timeNew.draggable = false
    body.append(timeNew)
    let time = document.getElementById('time')
    
    let scoreNew = document.createElement("input")
    scoreNew.id = "score"
    scoreNew.type = 'number'
    scoreNew.disabled = true
    scoreNew.draggable = false
    body.append(scoreNew)
    let score = document.getElementById('score')

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
    score.remove()
    inGame = false
    fullBoxes = []
    startTime = gameTime
    for (let i = 0; i < 16; i++) {
        document.getElementById(i.toString()).remove()
    }
    changeColor(grid, colorTheme[2])
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
    let startNew = document.createElement("p")
    startNew.id = "start"
    startNew.innerText = "START"
    startNew.addEventListener( 'click', start )
    startNew.addEventListener( 'mouseenter', () => {
        startNew.style.cursor = "pointer"
    })
    grid.append(startNew)
}