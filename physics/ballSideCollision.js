function ballSideCollision(ball, index) {
  if (ball.x + ball.size >= gameWidth) {
    ball.x = gameWidth - ball.size
    ball.xMove *= -1
    bounceOffset(index)
  }

  if (ball.y + ball.size >= gameHeight) {
    ball.y = gameHeight - ball.size
    ball.yMove *= -1
    bounceOffset(index)
  } else if (ball.y - ball.size <= 0) {
    ball.y = ball.size
    ball.yMove *= -1
    bounceOffset(index)
  }


  // temp code to bounce off right side
  if (ball.x - ball.size <= 0) {
    ball.xMove *= -1
    bounceOffset(index)
  }
}