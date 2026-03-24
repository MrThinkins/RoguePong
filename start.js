const gameWidth = 1920
const gameHeight = 1080

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')

canvas.width = gameWidth
canvas.height = gameHeight

ctx.fillStyle = "black"
ctx.fillRect(0, 0, gameWidth, gameHeight)
ctx.fillStyle = "red"
ctx.fillRect(100, 100, 200, 200)