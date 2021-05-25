// Setup //

grid.style.outlineColor = colorTheme[1]
grid.style.backgroundColor = colorTheme[2]
body.style.color = colorTheme[0]

customTheme1.value = colorTheme[0]
customTheme2.value = colorTheme[1]
customTheme3.value = colorTheme[2]
customTheme1.style.visibility = 'hidden'
customTheme2.style.visibility = 'hidden'
customTheme3.style.visibility = 'hidden'

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

const randomColor = () => {
    const colorComponents = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E']
    let newColor = '#'
    for (var i = 0; i < 6; i++){
        newColor = newColor + colorComponents[Math.floor(Math.random() * colorComponents.length)]
    }
    return newColor
  }

blackTheme.addEventListener('click', () => {
    colorTheme = ['#000000', '#808080', '#a9a9a9']
    updateColorTheme()
    customTheme1.value = colorTheme[0]
    customTheme2.value = colorTheme[1]
    customTheme3.value = colorTheme[2]
    
})
blueTheme.addEventListener('click', () => {
    colorTheme = ['#000080', '#000066', '#add8e6']
    updateColorTheme()
    customTheme1.value = colorTheme[0]
    customTheme2.value = colorTheme[1]
    customTheme3.value = colorTheme[2]
})
redTheme.addEventListener('click', () => {
    colorTheme = ['#B30000', '#CC0000', '#FF6666']
    updateColorTheme()
    customTheme1.value = colorTheme[0]
    customTheme2.value = colorTheme[1]
    customTheme3.value = colorTheme[2]
})

const moveDown = (element, times) => {
    for (let i = 0; i < times; i++) {
        setTimeout(() => {element.style.top = `${parseInt(getComputedStyle(element).top) + 1}px`}, 10)
    }
}

const moveUp = (element, times) => {
    for (let i = 0; i < times; i++) {
        setTimeout(() => {element.style.top = `${parseInt(getComputedStyle(element).top) - 1}px`}, 10)
    }
}

colorDropdown.addEventListener('click', () => {
    if (customTheme1.style.visibility === 'hidden'){
        customTheme1.style.visibility = 'visible'
        customTheme2.style.visibility = 'visible'
        customTheme3.style.visibility = 'visible'

        moveDown(customTheme1, 10)
        moveDown(customTheme2, 58)
        moveDown(customTheme3, 106)
    } else {
        customTheme1.style.visibility = 'hidden'
        customTheme2.style.visibility = 'hidden'
        customTheme3.style.visibility = 'hidden'

        moveUp(customTheme1, 10)
        moveUp(customTheme2, 58)
        moveUp(customTheme3, 106)
    }

})

customThemePicker.addEventListener('click', () => {
    let c1, c2, c3
    c1 = randomColor()
    c2 = randomColor()
    c3 = randomColor()
    
    while (c2 === c1){
        c2.randomColor()
    }
    
    while (c3 === c2 && c3 === c1){
        c3.randomColor()
    }

    console.log(`1 ${c1} - 2 ${c2} - 3 ${c3}`)

    customTheme1.value = c1
    customTheme2.value = c2
    customTheme3.value = c3
    colorTheme = [c1, c2, c3]
    updateColorTheme()
    
})

customTheme1.addEventListener('input', () => {
    colorTheme[0] = customTheme1.value
    updateColorTheme()
})

customTheme2.addEventListener('input', () => {
    colorTheme[1] = customTheme2.value
    updateColorTheme()
})

customTheme3.addEventListener('input', () => {
    colorTheme[2] = customTheme3.value
    updateColorTheme()
})