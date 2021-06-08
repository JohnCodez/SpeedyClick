function changeTimeNotification(seconds) {
    const newTimeNotification = document.createElement('div')
    const tempId = 'notification-' + parseInt(time.value)
    if(seconds > 0){
        newTimeNotification.id = tempId
        newTimeNotification.style.display = 'none'
        newTimeNotification.style.color = 'green'
        newTimeNotification.innerText = '+' + seconds
        timeNotification.append(newTimeNotification)
        $(`#${tempId}`).fadeIn(100)
        $(`#${tempId}`).fadeOut(1000, () => {console.log('done')})
    } else if (seconds < 0) {
        newTimeNotification.id = tempId
        newTimeNotification.style.display = 'none'
        newTimeNotification.style.color = 'red'
        newTimeNotification.innerText = seconds
        timeNotification.append(newTimeNotification)
    $(`#${tempId}`).fadeIn(100)
    $(`#${tempId}`).fadeOut(1000, () => {document.getElementById(tempId).remove()})

    }
}
