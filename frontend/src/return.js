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