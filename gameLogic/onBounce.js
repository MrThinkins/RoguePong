/**
 * 
 * @param {*} i : index of the ball
 */
function onBounce(i) {
  if (state.game.balls[i].speed <= 8) {
    state.game.balls[i].speed += 0.2
  }
  updateScore('bounce')
  for (let i = 0; i < currentUpgrades.length; i++) {
    if (currentUpgrades[i].toCall == "onBounce") {
      currentUpgrades[i].function()
    }
  }
}