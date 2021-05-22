const body = document.getElementById('body')

const blackTheme = document.getElementById('black-theme')
const blueTheme = document.getElementById('blue-theme')
const redTheme = document.getElementById('red-theme')
const customThemePicker = document.getElementById('custom-theme-picker')
const customTheme1 = document.getElementById('custom-theme1')
const customTheme2 = document.getElementById('custom-theme2')
const customTheme3 = document.getElementById('custom-theme3')
const colorDropdown = document.getElementById('color-dropdown')

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
let colorTheme = ['#000000', '#808080', '#a9a9a9']
let inGame = false
let inEndMenu = false

let fullBoxes = []
let startingBoxes = 2
let gridSize = 16

