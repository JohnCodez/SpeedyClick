function changeColor(element, color) {
    element.style.backgroundColor = color
}

function clicked(event) {
    event.preventDefault()
    changeColor(event.target, colorTheme[2])
    score.value = score.value + 100
}