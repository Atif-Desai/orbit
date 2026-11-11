export const MISSION = { totalSols: 14, crewSize: 4 }
export const GAUGE_MIN = 0
export const GAUGE_MAX = 100

export const SYSTEMS = ['lifeSupport', 'shielding', 'food', 'science']

export const START_GAUGES = { oxygen: 100, food: 100, shield: 100, health: 100 }

export const ENVIRONMENTS = {
  moon: {
    id: 'moon',
    name: 'Moon: South Pole Outpost',
    powerPerSol: 100,
    blurb: 'No atmosphere to block radiation, and long lunar nights limit solar power.',
  },
  mars: {
    id: 'mars',
    name: 'Mars: Jezero Outpost',
    powerPerSol: 80,
    blurb: 'Dust reduces solar power, and messages to Earth take minutes.',
  },
}