const state = {
  screen: "startMenu",
  lastScreen: "startMenu",
  lastScreenFunction: createStartMenu,
  players: [

  ],
  current: createStartMenu(),
  game: createSinglePlayer(),
  input: {
    player1: {
      up: false,
      down: false,
      left: false,
      right: false,
      enter: false,
      escape: false,
    }
  },
  soundEffect: 80, 
  musicVolume: 80
}
