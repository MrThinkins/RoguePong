function drawPaddles() {
  for (let i = 0; i < state.game.paddles.length; i++) {
    paddle = state.game.paddles[i]
    ctx.fillStyle = "white"

    ctx.fillRect(paddle.x - paddle.width, paddle.y - paddle.height, paddle.width * 2, paddle.height * 2)
  }
}