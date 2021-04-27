function changeColor(element, color) {
    element.style.backgroundColor = color
}

function clicked(event) {
    event.preventDefault()
    changeColor(event.target, 'white')
}

function start() {
    startButton.remove()
    for (let i = 0; i < 16; i++) {
        let tag = document.createElement("div")
        tag.className = 'gridbox'
        tag.draggable = 'false'
        tag.id = i
        grid.append(tag)
        gridbox[i].addEventListener('mousedown', clicked )
    }
}

startButton.addEventListener( 'click', () => start() )
startButton.addEventListener( 'mouseenter', () => {
    startButton.style.cursor = "pointer"
})
