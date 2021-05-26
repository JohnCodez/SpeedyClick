function start(enteredTime) {
    document.getElementById('classic').remove()
    document.getElementById('speed').remove()
    scoreBoardTitle.remove()
    timeTitle.remove()
    inGame = true
    gameTime = enteredTime
    startTime = enteredTime
    
    startScore()
    playTime()
    setColors()
    createGrid()
}

function insertButtons(name, enteredTime) {
    window[name] = document.createElement("p")
    window[name].id = name
    window[name].innerText = name.charAt(0).toUpperCase() + name.slice(1)
    window[name].addEventListener('click', () => start(enteredTime))
    window[name].addEventListener('mouseenter', () => {
        window[name].style.cursor = cursorPointer
    })
    grid.append(window[name])
}

insertButtons('classic', classicTime)
insertButtons('speed', speedTime)