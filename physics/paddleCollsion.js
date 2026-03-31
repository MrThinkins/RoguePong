function paddleCollision(paddle, paddleIndex, ball) {
  if (paddle.x + paddle.width >= ball.x - ball.size) {
    if (paddle.y + paddle.height >= ball.y - ball.size && paddle.y - paddle.height <= ball.y + paddle.height) {
      console.log('bounce')
      ball.xMove *= -1
    }
    
  }
}