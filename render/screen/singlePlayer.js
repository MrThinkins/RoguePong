function renderSinglePlayer() {
  ctx.fillStyle = "white"
  ctx.font = "100px Arial"
  ctx.fillText("singlePlayerScreen", gameWidth / 2 - 460, gameHeight / 2 - 300)

  // for (ball in state.game.balls) {
  for (let i = 0; i < state.game.balls.length; i++) {
    ball = state.game.balls[i]
    console.log(ball)
    drawBall(ball.x, ball.y, ball.size, ball.color)
  }
}