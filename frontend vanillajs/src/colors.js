// Setup //

grid.style.outlineColor = colorTheme[1]
grid.style.backgroundColor = colorTheme[2]
body.style.color = colorTheme[0]

blackTheme.addEventListener('mouseenter', () => {blackTheme.style.cursor = "pointer"})
blueTheme.addEventListener('mouseenter', () => {blueTheme.style.cursor = "pointer"})
redTheme.addEventListener('mouseenter', () => {redTheme.style.cursor = "pointer"})

function updateColorTheme() {
    body.style.color = colorTheme[0]
    grid.style.outlineColor = colorTheme[1]
    if (inGame == false) {
        grid.style.backgroundColor = colorTheme[2]
    } else {
        for (let i = 0; i < 16; i++) {
            let box = document.getElementById(i.toString())
            box.style.backgroundColor = colorTheme[0]
            box.style.outlineColor = colorTheme[1]
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
