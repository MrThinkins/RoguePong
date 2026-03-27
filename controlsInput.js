const input = {
  keys: new Set(),
  gamepad: null
}

window.addEventListener('keydown', e => input.keys.add(e.code))
window.addEventListener('keyup', e => input.keys.delete(e.code))

function controlsInput() {
  // console.log(input.keys)
  // player 1

  if (input.keys.has('KeyW')) {
    state.input.player1.up = true
  } else {
    state.input.player1.up = false
  }
  if (input.keys.has('KeyS')) {
    state.input.player1.down = true
  } else {
    state.input.player1.down = false
  }

  // player 2
  if (input.keys.has('ArrowUp')) {
    console.log('ArrowUp')
  }
  if (input.keys.has('ArrowDown')) {
    console.log('ArrowDown')
  }
}