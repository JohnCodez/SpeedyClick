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
    home.addEventListener('mouseenter', () => {home.style.cursor = `url(${cursorPointer}), pointer`})
    home.addEventListener('click', goBackHome)
    grid.append(endText)
    grid.append(home)
}