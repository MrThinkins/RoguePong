const soundEffectPos = {
  x: 1200,
  y: 400,
  xEnd: 650,
  yEnd: 10,
}

function renderOption() {
  ctx.fillStyle = "white"
  ctx.font = "150px Arial"
  ctx.fillText("Options", gameWidth / 2 - 270, 200)

  ctx.font = "75px Arial"
  ctx.fillText("Sound Volume", gameWidth / 2 - 300, 425)
  ctx.fillRect(soundEffectPos.x, soundEffectPos.y, soundEffectPos.xEnd, soundEffectPos.yEnd)

  ctx.fillText("Music Volume", gameWidth / 2 - 280, 625)
  ctx.fillRect(soundEffectPos.x, soundEffectPos.y + 200, soundEffectPos.xEnd, soundEffectPos.yEnd)
  
  ctx.fillText("Back", gameWidth / 2 - 110, 825)
}