const boxPos = [
  {
    x: 50,
    y: 180
  },
  {
    x: 50,
    y: 480
  },
  {
    x: 50,
    y: 780
  }
]

const boxSize = {
  width: 1820,
  height: 260
}
function upgrades() {
  const upgradeText = "Choose a upgrade"
  ctx.fillStyle = "green"
  ctx.font = "100px Arial"

  ctx.fillText(upgradeText, gameWidth / 2 - 400, 120)

  ctx.strokeStyle ="white"
  for (let i = 0; i < 3; i++) {
    ctx.beginPath()
    ctx.moveTo(boxPos[i].x, boxPos[i].y)
    ctx.lineTo(boxPos[i].x, boxPos[i].y + boxSize.height)
    ctx.lineTo(boxPos[i].x + boxSize.width, boxPos[i].y + boxSize.height)
    ctx.lineTo(boxPos[i].x + boxSize.width, boxPos[i].y)
    ctx.lineTo(boxPos[i].x, boxPos[i].y)
    ctx.stroke()
  }

  if (state.input.player1.escape || state.input.player1.enter) {
    addUpgrade(1)
    addUpgrade(0)

    state.game.score = 0
    state.game.scoreToPass = Math.floor(state.game.scoreToPass * 1.5)
    console.log(`scoreToPass: ${state.game.scoreToPass}`)
    state.screen = "singlePlayer"
    createNextSinglePlayerRound()
  }
}