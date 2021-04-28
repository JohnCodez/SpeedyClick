const body = document.getElementById('body')

const blackTheme = document.getElementById('black-theme')
const blueTheme = document.getElementById('blue-theme')
const redTheme = document.getElementById('red-theme')

const gridbox = document.getElementsByClassName('gridbox')
const grid = document.getElementById('grid')

const startButton = document.getElementById('start')
const time = document.getElementById('time')
const score = document.getElementById('score')
const home = document.getElementById('home')

let startTime = 2
let colorTheme = ['black', 'gray', 'darkgray']
let inGame = false

let emptyBoxes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let fullBoxes = []

