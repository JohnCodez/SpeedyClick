function createGrid() {
    for (let i = 0; i < startingBoxes; i++) {
        fullBoxes.push(getRandomBoxNumber())
    }
    for (let i = 0; i < gridSize; i++) {
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
}
function getRandomBoxNumber() {
    let number = Math.floor(Math.random() * 16)
    while (fullBoxes.includes(number)){
        number = getRandomBoxNumber()
    }
    
    return number
}

function changeColor(element, color) {
    element.style.backgroundColor = color
}


function clicked(event) {
    event.preventDefault()
    // console.log(event.target.id)
    // console.log(fullBoxes)

    if (fullBoxes.includes(parseInt(event.target.id))) {
        
        let newFullBox = getRandomBoxNumber()

        fullBoxes = fullBoxes.filter(box => box != (event.target.id))
        changeColor(event.target, colorTheme[2])
        score.value = parseInt(score.value) + 100
        addTime(timeChangeOnDarkClick)

        fullBoxes.push(newFullBox)
        document.getElementById(newFullBox).style.backgroundColor = colorTheme[0]
    } else if (timeChangeOnLightClick !== 0){
        addTime(timeChangeOnLightClick)
    } else {
        gameEnd()
    }
}
