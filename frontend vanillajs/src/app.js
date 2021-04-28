// Start //

function start() {
    // Setup
    startButton.remove()
    inGame = true
    for (let i = 0; i < 16; i++) {
        let tag = document.createElement("div")
        tag.className = 'gridbox'
        tag.draggable = 'false'
        tag.style.backgroundColor = colorTheme[0]
        tag.style.outlineColor = colorTheme[1]
        tag.id = i
        grid.append(tag)
        gridbox[i].addEventListener('mousedown', clicked )
    }
    score.value = 0
    
    // Time Control
    function stopTime() {
        clearInterval(decreaseTime)
    }
    time.value = startTime
    const decreaseTime = setInterval(() => {
        if (time.value != 0) {
            time.value = Math.round(((time.value - 0.01) + Number.EPSILON) * 100) / 100
        } else {
            stopTime()
            gameEnd()
        }
    }, 10)
    
}

startButton.addEventListener( 'click', () => start() )
startButton.addEventListener( 'mouseenter', () => {
    startButton.style.cursor = "pointer"
})

// End //

function gameEnd() {
    time.remove()
    inGame = false
    for (let i = 0; i < 16; i++) {
        document.getElementById(i.toString()).remove()
    }
    changeColor(grid, colorTheme[2])
    const endText = document.createElement("h1")
    const home = document.createElement("h1")
    endText.innerText = "Score: " + score.value
    endText.id = "endText"
    home.innerText = "Home"
    home.id = "home"
    home.addEventListener('mouseenter', () => {home.style.cursor = "pointer"})
    home.addEventListener('click', goBackHome())
    grid.append(endText)
    grid.append(home)
}

// Return //

function goBackHome() {
    score.remove()
    // home.remove()
}