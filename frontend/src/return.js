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
    let classicNew = document.createElement("p")
    classicNew.id = "classic"
    classicNew.innerText = "Classic"
    classicNew.addEventListener( 'click', classic )
    classicNew.addEventListener( 'mouseenter', () => {
        classicNew.style.cursor = `url(${cursorPointer}), pointer`
    })
    grid.append(classicNew)
}