import { START_GAUGES, MISSION } from '../engine/constants'

export const SCREENS = [
  'landing', 'envSelect', 'setup', 'briefing',
  'dashboard', 'report', 'sources',
]

export const initialState = {
  screen: 'landing',
  environment: null,
  difficulty: 'easy',
  sol: 1,
  totalSols: MISSION.totalSols,
  gauges: { ...START_GAUGES },
}

export function gameReducer(state, action) {
  switch (action.type) {
    case 'GO_TO':
      return { ...state, screen: action.screen }
    case 'SET_ENVIRONMENT':
      return { ...state, environment: action.environment }
    case 'SET_DIFFICULTY':
      return { ...state, difficulty: action.difficulty }
    case 'RESET':
      return { ...initialState }
    default:
      return state
  }
}