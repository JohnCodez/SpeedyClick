function updateCursor() {
    body.style.cursor = cursorDefault

    blackTheme.style.cursor = cursorPointer
    blueTheme.style.cursor = cursorPointer
    redTheme.style.cursor = cursorPointer
    customThemePicker.style.cursor = cursorPointer
    colorDropdown.style.cursor = cursorPointer
    customTheme1.style.cursor = cursorPointer
    customTheme2.style.cursor = cursorPointer
    customTheme3.style.cursor = cursorPointer
    account.style.cursor = cursorPointer

    let selectClassic = document.getElementById('classic')
    let selectEnd = document.getElementById('endText')
    let selectHome = document.getElementById('home')

    if(selectClassic){
        selectClassic.style.cursor = cursorPointer
    }
    if(selectEnd){
        selectEnd.style.cursor = cursorPointer
    }
    if(selectHome){
        selectHome.style.cursor = cursorPointer
    }
}

cursorSwap.addEventListener('click', () => {
    if(cursorDefault === 'url(https://cdn.custom-cursor.com/db/2/32/pointer2.png), default' ){
        cursorDefault = 'default'
        cursorPointer = 'pointer'
    } else {
        cursorDefault = 'url(https://cdn.custom-cursor.com/db/2/32/pointer2.png), default'
        cursorPointer = 'url(https://cdn.custom-cursor.com/db/1/32/pointer1.png), pointer'
    }
    updateCursor()
})