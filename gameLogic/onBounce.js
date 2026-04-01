/**
 * 
 * @param {*} i : index of the ball
 */
function onBounce(i) {
  if (state.game.balls[i].speed <= 8) {
    state.game.balls[i].speed += 0.2
  }
}