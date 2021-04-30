const body = document.getElementById('body')

const blackTheme = document.getElementById('black-theme')
const blueTheme = document.getElementById('blue-theme')
const redTheme = document.getElementById('red-theme')

const gridbox = document.getElementsByClassName('gridbox')
const grid = document.getElementById('grid')
const scoreBoard = document.getElementById('score-board')
const timeBox = document.getElementById('time-box')
const currentScoreBox = document.getElementById('current-score-box')
const previousScoreBox = document.getElementById('previous-score-box')
let scoreBoardTitle = document.getElementById('scoreboard-title')
let timeTitle = document.getElementById('time-title')
let finishedTimeTitle = document.getElementById('finished-time-title')

let startButton = document.getElementById('start')

let gameTime = 20
let startTime = gameTime
let finishedTime = 0
let colorTheme = ['black', 'gray', 'darkgray']
let inGame = false
let inEndMenu = false

let fullBoxes = []
let startingBoxes = 2
let gridSize = 16

