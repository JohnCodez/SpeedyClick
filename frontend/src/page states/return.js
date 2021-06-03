// Return //

function goBackHome() {
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
    insertButtons('classic', classicTime, 0, 0)
    insertButtons('speed', speedTime, 0, 0)
    insertButtons('survivor', survivorTime, 0, survivorLoseTime)
}