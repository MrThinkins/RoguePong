function ballSideCollision(ball) {
  if (ball.x + ball.size >= gameWidth) {
    ball.x = gameWidth - ball.size
    ball.xMove *= -1
  }

  if (ball.y + ball.size >= gameHeight) {
    ball.y = gameHeight - ball.size
    ball.yMove *= -1
  } else if (ball.y - ball.size <= 0) {
    ball.y = ball.size
    ball.yMove *= -1
  }


  // temp code to bounce off right side
  if (ball.x - ball.size <= 0) {
    ball.xMove *= -1
  }
}