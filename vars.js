const menuInputDelay = 10

function createStartMenu() {
  return ({
    selected: 0,
    timeTillNextInput: menuInputDelay,
  })
}

function createSinglePlayerPause() {
  return ({
    selected: 0,
    timeTillNextInput: menuInputDelay,
  })
}