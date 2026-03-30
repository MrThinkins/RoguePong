function drawBall(x, y, size, color) {
  ctx.fillStyle.color = color
  ctx.fillRect(x - size, y - size, size * 2, size * 2)
}