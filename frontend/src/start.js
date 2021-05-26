function start(enteredTime, addSecondsOnDarkClick, addSecondsOnLightClick) {
    document.getElementById('classic').remove()
    document.getElementById('speed').remove()
    document.getElementById('survivor').remove()
    scoreBoardTitle.remove()
    timeTitle.remove()
    inGame = true
    gameTime = enteredTime
    startTime = enteredTime
    timeChangeOnDarkClick = addSecondsOnDarkClick
    timeChangeOnLightClick = addSecondsOnLightClick
    
    startScore()
    playTime()
    setColors()
    createGrid()
}

function insertButtons(name, enteredTime, addSecondsOnDarkClick, addSecondsOnLightClick) {
    window[name] = document.createElement("p")
    window[name].id = name
    window[name].innerText = name.charAt(0).toUpperCase() + name.slice(1)
    window[name].addEventListener('click', () => start(enteredTime, addSecondsOnDarkClick, addSecondsOnLightClick))
    window[name].addEventListener('mouseenter', () => {
        window[name].style.cursor = cursorPointer
    })
    grid.append(window[name])
}

insertButtons('classic', classicTime, 0, 0)
insertButtons('speed', speedTime, 0, 0)
insertButtons('survivor', survivorTime, 0, survivorLoseTime)