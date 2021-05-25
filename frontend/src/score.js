function startScore() {
    let scoreNew = document.createElement("input")
    scoreNew.id = "score"
    scoreNew.type = 'number'
    scoreNew.disabled = true
    scoreNew.draggable = false
    currentScoreBox.append(scoreNew)
    let score = document.getElementById('score')

    score.value = 0    
}