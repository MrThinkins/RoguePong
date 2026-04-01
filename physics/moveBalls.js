function moveBalls(x, y) {
  for (let i = 0; i < state.game.balls.length; i++) {
    ball = state.game.balls[i]
    ball.x += ball.xMove * ball.speed
    ball.y += ball.yMove * ball.speed
    for (let j = 0; j < state.game.paddles.length; j++) {
      paddle = state.game.paddles[j]
      paddleCollision(paddle, j, ball, i)
    }
    ballSideCollision(ball, i)
    
  }
}