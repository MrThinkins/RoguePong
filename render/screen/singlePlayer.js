function renderSinglePlayer() {
  ctx.fillStyle = "white"
  ctx.font = "100px Arial"
  ctx.fillText("singlePlayerScreen", gameWidth / 2 - 460, gameHeight / 2 - 300)

  drawBall(state.game.ball.x, state.game.ball.y, state.game.ball.size, state.game.ball.color)
}