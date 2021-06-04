menuButton.addEventListener('click', () => {
    if (themeToolbar.style.visibility === 'hidden'){
        themeToolbar.style.visibility = 'visible'
    } else {
        themeToolbar.style.visibility = 'hidden'

        if (customTheme1.style.visibility === 'visible'){
        customTheme1.style.visibility = 'hidden'
        customTheme2.style.visibility = 'hidden'
        customTheme3.style.visibility = 'hidden'

        moveUp(customTheme1, 10)
        moveUp(customTheme2, 58)
        moveUp(customTheme3, 106)
        }
    }
})