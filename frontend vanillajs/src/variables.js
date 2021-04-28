const body = document.getElementById('body')

const blackTheme = document.getElementById('black-theme')
const blueTheme = document.getElementById('blue-theme')
const redTheme = document.getElementById('red-theme')

const gridbox = document.getElementsByClassName('gridbox')
const grid = document.getElementById('grid')

let startButton = document.getElementById('start')
const score = document.getElementById('score')

let gameTime = 20
let startTime = gameTime
let colorTheme = ['black', 'gray', 'darkgray']
let inGame = false

let fullBoxes = []
let startingBoxes = 2

