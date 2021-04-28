// Setup //

grid.style.outlineColor = colorTheme[1]
grid.style.backgroundColor = colorTheme[2]
body.style.color = colorTheme[0]

blackTheme.addEventListener('mouseenter', () => {blackTheme.style.cursor = "pointer"})
blueTheme.addEventListener('mouseenter', () => {blueTheme.style.cursor = "pointer"})
redTheme.addEventListener('mouseenter', () => {redTheme.style.cursor = "pointer"})

blackTheme.addEventListener('click', () => {
    colorTheme = ['black', 'gray', 'darkgray']
    body.style.color = colorTheme[0]
    grid.style.outlineColor = colorTheme[1]
    if (inGame == false) {
        grid.style.backgroundColor = colorTheme[2]
    }
})
blueTheme.addEventListener('click', () => {
    colorTheme = ['#000080', '#000066', 'lightblue']
    body.style.color = colorTheme[0]
    grid.style.outlineColor = colorTheme[1]
    if (inGame == false) {
        grid.style.backgroundColor = colorTheme[2]
    }
})
redTheme.addEventListener('click', () => {
    colorTheme = ['#CC0000', '#B30000', '#FF6666']
    body.style.color = colorTheme[0]
    grid.style.outlineColor = colorTheme[1]
    if (inGame == false) {
        grid.style.backgroundColor = colorTheme[2]
    }
})
