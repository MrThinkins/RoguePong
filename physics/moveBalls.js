function moveBalls(x, y) {
  for (let i = 0; i < state.game.balls.length; i++) {
    ball = state.game.balls[i]
    ball.x += ball.xMove * ball.speed
    ball.y += ball.yMove * ball.speed
    ballSideCollision(ball)
  }
}