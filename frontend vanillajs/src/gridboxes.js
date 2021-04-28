function changeColor(element, color) {
    element.style.backgroundColor = color
}

function getRandomBoxNumber() {
    return Math.floor(Math.random() * 16)
}

function clicked(event) {
    event.preventDefault()

    if (fullBoxes.includes(event.target.id)) { 
        fullBoxes.filter(box => box != (event.target.id))
        console.log(fullBoxes)
        changeColor(event.target, colorTheme[2])
        score.value = score.value + 100
    } else {
        gameEnd()
    }
}