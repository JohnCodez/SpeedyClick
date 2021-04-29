function changeColor(element, color) {
    element.style.backgroundColor = color
}

function getRandomBoxNumber() {
    let number = Math.floor(Math.random() * 16)
    while (fullBoxes.includes(number)){
        number = getRandomBoxNumber()
    }
    
    return number
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

        fullBoxes.push(newFullBox)
        document.getElementById(newFullBox).style.backgroundColor = colorTheme[0]
    } else {
        gameEnd()
    }
}