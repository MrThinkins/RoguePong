function pointOneMultOnBounce() {
  addScore(Math.floor(state.game.score / 10) < 1 ? 1 : Math.floor(state.game.score / 10))
}