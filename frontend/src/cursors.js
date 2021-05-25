function updateCursor() {
    body.style.cursor = `url(${cursorDefault}), default`

    blackTheme.style.cursor = `url(${cursorPointer}), pointer`
    blueTheme.style.cursor = `url(${cursorPointer}), pointer`
    redTheme.style.cursor = `url(${cursorPointer}), pointer`
    customThemePicker.style.cursor = `url(${cursorPointer}), pointer`
    colorDropdown.style.cursor = `url(${cursorPointer}), pointer`
    customTheme1.style.cursor = `url(${cursorPointer}), pointer`
    customTheme2.style.cursor = `url(${cursorPointer}), pointer`
    customTheme3.style.cursor = `url(${cursorPointer}), pointer`

    let selectClassic = document.getElementById('classic')
    let selectEnd = document.getElementById('endText')
    let selectHome = document.getElementById('home')

    if(selectClassic){
        selectClassic.style.cursor = `url(${cursorPointer}), pointer`
    }
    if(selectEnd){
        selectEnd.style.cursor = `url(${cursorPointer}), pointer`
    }
    if(selectHome){
        selectHome.style.cursor = `url(${cursorPointer}), pointer`
    }
}

cursorSwap.addEventListener('click', () => {
    if(cursorDefault === 'https://cdn.custom-cursor.com/db/2/32/pointer2.png' ){
        cursorDefault = 'default'
        cursorPointer = 'pointer'
    } else {
        cursorDefault = 'https://cdn.custom-cursor.com/db/2/32/pointer2.png'
        cursorPointer = 'https://cdn.custom-cursor.com/db/1/32/pointer1.png'
    }

    updateCursor()
})