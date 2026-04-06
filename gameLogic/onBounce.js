/**
 * 
 * @param {*} i : index of the ball
 */
function onBounce(i) {
  if (state.game.balls[i].speed <= 8) {
    state.game.balls[i].speed += 0.2
    const playPitch  = (Math.floor(Math.random() * 20) + 1) / 1000 + 0.99
    bounceSound.play(playPitch)
  }
  updateScore('bounce')
  for (let i = 0; i < currentUpgrades.length; i++) {
    if (currentUpgrades[i].toCall == "onBounce") {
      currentUpgrades[i].function()
    }
  }
}