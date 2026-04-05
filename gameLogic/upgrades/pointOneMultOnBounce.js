function pointOneMultOnBounce() {
  console.log(`score before: ${state.game.score}`)
  addScore(Math.floor(state.game.score / 10) < 1 ? 1 : Math.floor(state.game.score / 10))
  console.log(`score after: ${state.game.score}`)
}