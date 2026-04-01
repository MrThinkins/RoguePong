function renderSinglePlayer() {
  for (let i = 0; i < state.game.balls.length; i++) {
    ball = state.game.balls[i]
    drawBall(ball.x, ball.y, ball.size, ball.color)
  }


  ctx.fillStyle = state.game.score < state.game.scoreToPass ? "red" : "green"
  ctx.font = "50px Arial"
  const scoreText = `Score: ${state.game.score}`
  ctx.fillText(scoreText, 10, 50)

  const scoreToPassText = `Round Goal: ${state.game.scoreToPass}` 
  ctx.font = "50px Arial"
  
  ctx.fillText(scoreToPassText, gameWidth - 650, 50)
}
