// Setup //

grid.style.outlineColor = colorTheme[1]
grid.style.backgroundColor = colorTheme[2]
body.style.color = colorTheme[0]

function setColors() {
    document.getElementById('time').style.color = colorTheme[0]
    document.getElementById('score').style.color = colorTheme[0]
}

scoreBoard.style.outlineColor = colorTheme[1]
scoreBoard.style.backgroundColor = colorTheme[2]
currentScoreBox.style.outlineColor = colorTheme[1]
currentScoreBox.style.backgroundColor = colorTheme[2]
previousScoreBox.style.outlineColor = colorTheme[1]
previousScoreBox.style.backgroundColor = colorTheme[2]
timeBox.style.outlineColor = colorTheme[1]
timeBox.style.backgroundColor = colorTheme[2]

blackTheme.addEventListener('mouseenter', () => {blackTheme.style.cursor = "pointer"})
blueTheme.addEventListener('mouseenter', () => {blueTheme.style.cursor = "pointer"})
redTheme.addEventListener('mouseenter', () => {redTheme.style.cursor = "pointer"})

function updateColorTheme() {
    body.style.color = colorTheme[0]
    grid.style.outlineColor = colorTheme[1]
    scoreBoard.style.outlineColor = colorTheme[1]
    scoreBoard.style.backgroundColor = colorTheme[2]
    currentScoreBox.style.outlineColor = colorTheme[1]
    currentScoreBox.style.backgroundColor = colorTheme[2]
    previousScoreBox.style.outlineColor = colorTheme[1]
    previousScoreBox.style.backgroundColor = colorTheme[2]
    timeBox.style.outlineColor = colorTheme[1]
    timeBox.style.backgroundColor = colorTheme[2]

    if (inGame == false) {
        grid.style.backgroundColor = colorTheme[2]
        if (inEndMenu == true){
            document.getElementById('score').style.color = colorTheme[0]
        }
    } else {
        setColors()
        for (let i = 0; i < 16; i++) {
            let box = document.getElementById(i.toString())
            box.style.outlineColor = colorTheme[1]
            if (fullBoxes.includes(i)){
                box.style.backgroundColor = colorTheme[0]
            } else {
                box.style.backgroundColor = colorTheme[2]
            }
        }
    }
}

blackTheme.addEventListener('click', () => {
    colorTheme = ['black', 'gray', 'darkgray']
    updateColorTheme()
    
})
blueTheme.addEventListener('click', () => {
    colorTheme = ['#000080', '#000066', 'lightblue']
    updateColorTheme()
    
})
redTheme.addEventListener('click', () => {
    colorTheme = ['#B30000', '#CC0000', '#FF6666']
    updateColorTheme()
    
})
