function Sound(src, volume = 0.8, pitch = 1, maxStreams = 24) {
  this.src = src
  this.volume = volume
  this.streams = []
  for (let i = 0; i < maxStreams; i++ ) {
    const stream = document.createElement("audio")
    stream.src = src
    stream.preload = 'auto'

    stream.preservesPitch  = false
    stream.mozPreservesPitch = false
    stream.webkitPreservesPitch = false

    this.streams.push(stream)
  }
  this.currentStream = 0
  this.pitchVar = pitch
  this.loop = false

  this.play = function(playPitch = 1) {
    const stream = this.streams[this.currentStream]

    stream.pause()
    stream.currentTime = 0

    stream.playbackRate = this.pitchVar * playPitch
    
    stream.volume = this.volume

    stream.loop = this.loop
    stream.currentTime = 0
    stream.play().catch(e => {})

    this.currentStream = (this.currentStream + 1) % maxStreams
  }

  this.stop = function() {
    this.streams.forEach(s => {
      s.pause()
      s.currentTime = 0
    })
  }

  this.setVolume = function(vol) {
    this.streams.forEach(s => s.volume = vol)
  }
}

const bounceSound = new Sound('assets/bounce.wav')