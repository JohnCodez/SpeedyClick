menuButton.addEventListener('click', () => {
    if (themeToolbar.style.visibility === 'hidden'){
        themeToolbar.style.visibility = 'visible'

        for (let i = 10; i <= 100; i = i + 10) {
            setTimeout(() => {themeToolbar.style.zoom = `${i}%`}, i) 
        }
        
    } else {
        let j = 10;
        for (let i = 100; i >= 10; i = i - 10) {
            setTimeout(() => {
                themeToolbar.style.zoom = `${i}%`
                if(i === 10) {
                    themeToolbar.style.visibility = 'hidden'
                }
            }
            , j)
            j = j + 10
        }

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