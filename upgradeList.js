const availableUpgrades = [
  {
    name: "Faster Move Speed",
    rarity: "common",
    function: fasterMoveSpeed,
    toCall: "roundStart",
    descriptionText: "Makes your paddle move faster"
  },
  {
    name: "More Luck",
    rarity: "common",
    function: moreLuck,
    toCall: "once",
    descriptionText: "Increases your luck by a small amount"
  },
  {
    name: "+1 Point On Bounce",
    rarity: "common",
    function: plusOneBounce,
    toCall: "onBounce",
    descriptionText: "+1 point per bounce"
  },
  {
    name: "10 Points On Start",
    rarity: "common",
    function: plusTenStart,
    toCall: "roundStart",
    descriptionText: "+10 points at the start of a round"
  },
  {
    name: "50 Points On Start",
    rarity: "uncommon",
    function: plusFiftyStart,
    toCall: "roundStart",
    descriptionText: "+50 points at the start of a round"
  },
  {
    name: "Bigger Paddle",
    rarity: "uncommon",
    function: biggerPaddle,
    toCall: "roundStart",
    descriptionText: "Makes your paddle bigger"
  },
  {
    name: "Lots More Luck",
    rarity: "uncommon",
    function: lotsMoreLuck,
    toCall: "once",
    descriptionText: "Increases your luck by a lot"
  },
  {
    name: "+2 Points On Bounce",
    rarity: "uncommon",
    function: plusTwoBounce,
    toCall: "onBounce",
    descriptionText: "+2 points per bounce"
  },
  {
    name: "250 Points On Start",
    rarity: "rare",
    function: plusTwoFiftyStart,
    toCall: "roundStart",
    descriptionText: "+250 points at the start of a round"
  },
  {
    name: "+4 Points On Bounce",
    rarity: "rare",
    function: plusFourBounce,
    toCall: "onBounce",
    descriptionText: "+4 points per bounce"
  },
  {
    name: "+8 Points On Bounce",
    rarity: "very rare",
    function: plusEightBounce,
    toCall: "onBounce",
    descriptionText: "+8 points per bounce"
  },
  {
    name: "x2 Score",
    rarity: "very rare",
    function: timesTwoEnd,
    toCall: "roundEnd",
    descriptionText: "At end of round double score"
  },
  {
    name: "+1000 Points On Start",
    rarity: "very rare",
    function: plusOneThousandStart,
    toCall: "roundStart",
    descriptionText: "+1000 points at start of round",
  },
  {
    name: "+5000 Points On Start",
    rarity: "legendary",
    function: plusFiveThousandStart,
    toCall: "roundStart",
    descriptionText: "+5000 points at start of round",
  },
  {
    name: "Stacking Points Per Bounce",
    rarity: "legendary",
    function: stackingPoints,
    toCall: "onBounce",
    descriptionText: "Every bounce gives +1 point stacking",
  },
  {
    name: "+16 Points On Bounce",
    rarity: "legendary",
    function: plusSixteenBounce,
    toCall: "onBounce",
    descriptionText: "+16 points per bounce"
  },
  {
    name: "x3 Score",
    rarity: "legendary",
    function: timesThreeEnd,
    toCall: "roundEnd",
    descriptionText: "At end of round triple score"
  },
  {
    name: "x4 Score",
    rarity: "legendary",
    function: timesFourEnd,
    toCall: "roundEnd",
    descriptionText: "At end of round quadruple score"
  },
  {
    name: "Mult On Bounce",
    rarity: "legendary",
    function: pointOneMultOnBounce,
    toCall: "onBounce",
    descriptionText: "Multiply your round score by 1.1 on bounce"
  },
]

const currentUpgrades = []


/**
 * {
 *  name: "name",
 *  rarity: "common (white), uncommon(green), rare(blue), very rare(purple), legendary(gold)",
 *  function: functionName(),
 *  toCall: "onBounce", "roundStart", "roundEnd", "once", 
 *  descriptionText: "effect description here"  
 * }
 */

function createUpgradeChoices() {
  
  
  const tempUpgradeChoicesIndexes = []
  for (let i = 0; i < 3; i++) {
    // generate rarity base on luck
    let rarityNumber = Math.floor(Math.random() * 10000)
    let rarity = "common"
    if (rarityNumber < 2000 && state.game.stats.luck > rarityNumber) {
      rarity = "legendary"
    } else if (rarityNumber < 4000 && state.game.stats.luck * 2 > rarityNumber)
    {
      rarity = "very rare"
    } else if (rarityNumber < 6000 && state.game.stats.luck * 4 > rarityNumber) {
      rarity = "rare"
    } else if (rarityNumber < 8000 && state.game.stats.luck * 8 > rarityNumber) {
      rarity = "uncommon"
    }

    let possibleList = []

    if (rarity == "legendary") {
      possibleList = availableUpgrades.filter(ability => ability.rarity == "legendary")
      if (possibleList.length == 0) {
        rarity = "very rare"
      }
    }
    if (rarity == "very rare") {
      possibleList = availableUpgrades.filter(ability => ability.rarity == "very rare")
      if (possibleList.length == 0) {
        rarity = "rare"
      }
    }
    if (rarity == "rare") {
      possibleList = availableUpgrades.filter(ability => ability.rarity == "rare")
      if (possibleList.length == 0) {
        rarity = "uncommon"
      }
    }
    if (rarity == "uncommon") {
      possibleList = availableUpgrades.filter(ability => ability.rarity == "uncommon")
      if (possibleList.length == 0) {
        rarity = "common"
      }
    }
    if (rarity == "common") {
      possibleList = availableUpgrades.filter(ability => ability.rarity == "common")
    }

    console.log(`possibleList:  ${possibleList}`)
    console.log(possibleList)

    const possibleIndex = Math.floor(Math.random() * possibleList.length)
    const upgradeIndex = availableUpgrades.findIndex(ability => ability.name == possibleList[possibleIndex].name)
    tempUpgradeChoicesIndexes.push(upgradeIndex)
  }
  upgradeChoicesIndexes = tempUpgradeChoicesIndexes
}

let upgradeChoicesIndexes
createUpgradeChoices()