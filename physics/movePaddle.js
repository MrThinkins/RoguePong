function movePaddle(paddleIndex, up) {
  if (up) {
    state.game.paddles[paddleIndex].y -= state.game.paddles[paddleIndex].moveSpeed
    if (state.game.paddles[paddleIndex].y - state.game.paddles[paddleIndex].height < 0) {
      state.game.paddles[paddleIndex].y = state.game.paddles[paddleIndex].height
    }
  } else {
    state.game.paddles[paddleIndex].y += state.game.paddles[paddleIndex].moveSpeed
    if (state.game.paddles[paddleIndex].y + state.game.paddles[paddleIndex].height >= gameHeight) {
      state.game.paddles[paddleIndex].y = gameHeight - state.game.paddles[paddleIndex].height
    }
  }
}