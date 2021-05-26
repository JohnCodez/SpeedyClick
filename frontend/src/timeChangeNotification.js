function changeTimeNotification(seconds) {
    if(seconds > 0){
        timeNotification.style.display = 'none'
        timeNotification.style.color = 'green'
        timeNotification.innerText = '+' + seconds
        $("#time-change-notification").fadeIn(100)
        $("#time-change-notification").fadeOut(1000)
    } else if (seconds < 0) {
        timeNotification.style.display = 'none'
        timeNotification.style.color = 'red'
        timeNotification.innerText = seconds
    $("#time-change-notification").fadeIn(100)
    $("#time-change-notification").fadeOut(1000)

    }
}
