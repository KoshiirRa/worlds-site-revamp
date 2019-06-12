import {NumberRange} from './numberRange'
import {RandomValue} from './randomValue'

import {createNamespacedHelpers} from 'vuex'
const {mapActions} = createNamespacedHelpers('diceRoller')

export const DiceRoller = {
  mixins: [NumberRange, RandomValue],
  methods: {
    ...mapActions(['addRoll']),
    rollFromString(string) {
      console.log(string)
      const split = string.split('d')
      console.log(split)
      if (!split[0] || !split[1]) {
        return null
      }
      const numDice = Number.parseInt(split[0].trim(), 10)
      console.log(numDice)
      const splitRange = split[1].split('+')
      console.log(splitRange)
      const faces = Number.parseInt(splitRange[0].trim(), 10)
      console.log(faces)

      let bonus = 0
      if (typeof splitRange[1] === 'string') {
        bonus = Number.parseInt(splitRange[1].trim(), 10)
      }
      console.log(bonus)
      const roll = this.roll(numDice, faces, bonus)
      roll.text = string
      console.log(roll)
      return roll
    },
    rollMany(many) {
      const rolls = []
      if (Array.isArray(many)){
        for (const roll of many) {
          rolls.push(this.rollFromString(roll))
        }
      }
      return rolls
    },
    setRoll(rolls, from = null) {
      if (!Array.isArray(rolls)){
        rolls = [rolls]
      }
      rolls = rolls.filter(r => r !== null)
      if (!rolls[0]) {
        return
      }
      console.log(rolls)
      this.addRoll ({
        from: from || 'Dice Roller',
        rolls,
        total: rolls.map(r => r.values.reduce((a,b) => a + b, 0) + r.bonus).reduce((a,b) => a + b, 0)
      })
    },
    roll (numDice, faces, bonus) {
      const roll = {
        values: [],
        bonus
      }
      const range = this.createNumberRange(1, faces)
      for (let i = 1; i <= numDice; i++) {
        const value = this.randomValue(range)
        roll.values.push(value)
      }
      return roll
    }
  }
}
