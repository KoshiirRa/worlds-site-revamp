export const homebrewDefaults = {
  data () {
    return {
      modelConig: {
        powers: {
          icon: 'mdi-fire',
          color: 'purple lighten-1'
        }
      },
      homebrewDefaults: {
        powers: {
          name: null,
          type: 'biotic',
          level: 0,
          classes: ['adept'],
          mechanics: [
            {
              castingTime: {
                unit: 'action'
              },
              damage: false,
              dc: false,
              duration: {
                length: 0,
                unit: 'instant'
              },
              concentration: false,
              range: {
                short: 0
              },
              detonates: false,
              primes: false,
              conditions: []
            }
          ],
          advancements: []
        }
      }
    }
  }
}