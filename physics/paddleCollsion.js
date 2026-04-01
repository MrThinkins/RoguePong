function paddleCollision(paddle, paddleIndex, ball, ballIndex) {
  const paddleLeft = paddle.x - paddle.width
  const paddleRight = paddle.x + paddle.width
  const paddleTop = paddle.y - paddle.height
  const paddleBottom = paddle.y + paddle.height
  
  const ballLeft = ball.x - ball.size
  const ballRight = ball.x + ball.size
  const ballTop = ball.y - ball.size
  const ballBottom = ball.y + ball.size

  if (paddleRight >= ballLeft
    && paddleTop + 25 <= ballBottom && paddleBottom - 25 >= ballTop
  ) {
    ball.xMove *= -1
    onBounce(ballIndex)
  } else if (paddleRight >= ballLeft && paddleLeft <= ballRight 
    && paddleTop <= ballBottom && paddleBottom >= ballTop
  ) {
    ball.xMove *= -1
    ball.yMove *= -1
    onBounce(ballIndex)
  }
}