import { describe, it, expect } from 'vitest'
import { MISSION, SYSTEMS } from './constants'

describe('constants', () => {
  it('has a 14-sol mission and 4 power systems', () => {
    expect(MISSION.totalSols).toBe(14)
    expect(SYSTEMS).toHaveLength(4)
  })
})