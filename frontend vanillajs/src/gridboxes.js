function changeColor(element, color) {
    element.style.backgroundColor = color
}

function getRandomBoxNumber() {
    return Math.floor(Math.random() * 16)
}

function clicked(event) {
    event.preventDefault()
    console.log(event.target.id)
    console.log(fullBoxes)

    if (fullBoxes.includes(parseInt(event.target.id))) { 
        console.log(fullBoxes)
        fullBoxes.filter(box => box != (event.target.id))
        changeColor(event.target, colorTheme[2])
        score.value = score.value + 100
    } else {
        gameEnd()
    }
}