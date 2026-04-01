function bounceOffset(ballIndex) {
  let offset = Math.floor(Math.random() * 20)
  offset *= 0.02
  
  let x = Math.floor(Math.random() * 2)
  if (state.game.balls[ballIndex].xMove <= 0) {
    if (x) {
      state.game.balls[ballIndex].xMove += offset
    } else {
      state.game.balls[ballIndex].xMove -= offset
    }
  } else {
    if (x) {
      state.game.balls[ballIndex].xMove -= offset
    } else {
      state.game.balls[ballIndex].xMove += offset
    }
  }
  if (state.game.balls[ballIndex].yMove <= 0) {
    if (x) {
      state.game.balls[ballIndex].yMove -= offset
    } else {
      state.game.balls[ballIndex].yMove += offset
    }
  } else {
    if (x) {
      state.game.balls[ballIndex].yMove += offset
    } else {
      state.game.balls[ballIndex].yMove -= offset
    }
  }

}