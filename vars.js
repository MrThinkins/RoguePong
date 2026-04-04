const menuInputDelay = 10

function createStartMenu() {
  return ({
    selected: 0,
    timeTillNextInput: menuInputDelay,
  })
}

function createSinglePlayer() {
  let xMove = Math.floor(Math.random() * 200) * 0.01 + 2 
  let yMove = 4 - xMove
  if (Math.floor(Math.random() * 2)) {
    xMove *= -1
  }
  if (Math.floor(Math.random() * 2)) {
    yMove *= -1
  }
  return ({
    balls: [
      {
        x: gameWidth / 2,
        y: gameHeight / 2,
        size: 10,
        color: "white",
        speed: 3,
        xMove: xMove,
        yMove: yMove,
      }
    ],
    paddles: [
      {
        x: 50,
        y: gameHeight / 2,
        width: 10,
        height: 100,
        speed: 4,
        color: 'white',
        moveSpeed: 8
      }
    ],
    stats: {
      luck: 10000  // default should be 100
    },
    score: 0, 
    scoreToPass: 10,
    finalScore: 0,    
  })
}

function createNextSinglePlayerRound() {
  let xMove = Math.floor(Math.random() * 200) * 0.01 + 2 
  let yMove = 4 - xMove
  if (Math.floor(Math.random() * 2)) {
    xMove *= -1
  }
  if (Math.floor(Math.random() * 2)) {
    yMove *= -1
  }
  state.game.balls = [
    {
      x: gameWidth / 2,
      y: gameHeight / 2,
      size: 10,
      color: "white",
      speed: 3,
      xMove: xMove,
      yMove: yMove,
    }
  ]

  state.game.paddles = [
    {
      x: 50,
      y: gameHeight / 2,
      width: 10,
      height: 100,
      speed: 4,
      color: 'white',
      moveSpeed: 8
    }
  ]

  for (let i = 0; i < currentUpgrades.length; i++) {
    if (currentUpgrades[i].toCall == "roundStart" || currentUpgrades[i].toCall == "once") {
      currentUpgrades[i].function()
    }
  }
}

function createSinglePlayerPause() {
  return ({
    selected: 0,
    timeTillNextInput: menuInputDelay,
  })
}

function createUpgradeMenuControls() {
  return ({
    selected: 0,
    timeTillNextInput: menuInputDelay,
  })
}