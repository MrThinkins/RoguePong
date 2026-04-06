function pointZeroOneMultOnBounce() {
  addScore(Math.floor(state.game.score / 100 < 1 ? 1 : Math.floor(state.game.score / 100)))
}