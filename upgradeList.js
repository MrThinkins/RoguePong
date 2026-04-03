const availableUpgrades = [
  {
    name: "Bigger Paddle",
    rarity: "uncommon",
    function: biggerPaddle,
    toCall: "roundStart",
    descriptionText: "makes your paddle bigger"
  },
  {
    name: "Stacking Points Per Bounce",
    rarity: "legendary",
    function: stackingPoints,
    toCall: "onBounce",
    descriptionText: "Every bounce gives +1 point stacking",
  },
  {
    name: "+1 Point On Bounce",
    rarity: "common",
    function: plusOneBounce,
    toCall: "onBounce",
    descriptionText: "+1 point per bounce"
  },
  {
    name: "+2 Points On Bounce",
    rarity: "uncommon",
    function: plusTwoBounce,
    toCall: "onBounce",
    descriptionText: "+2 points per bounce"
  },
  {
    name: "+4 Points On Bounce",
    rarity: "rare",
    function: plusFourBounce,
    toCall: "onBounce",
    descriptionText: "+4 points per bounce"
  }
]

const currentUpgrades = []


/**
 * {
 *  name: "name",
 *  rarity: "common (white), uncommon(green), rare(blue), very rare(purple), legendary(gold)",
 *  function: functionName(),
 *  toCall: "onBounce", "roundStart", "roundEnd", 
 *  descriptionText: "effect description here"  
 * }
 */

function createUpgradeChoices() {
  const tempUpgradeChoicesIndexes = []
  for (let i = 0; i < 3; i++) {
    const upgradeIndex = Math.floor(Math.random() * availableUpgrades.length)
    tempUpgradeChoicesIndexes.push(upgradeIndex)
  }
  upgradeChoicesIndexes = tempUpgradeChoicesIndexes
}

let upgradeChoicesIndexes
createUpgradeChoices()