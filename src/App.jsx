import { useReducer } from 'react'
import { gameReducer, initialState } from './state/gameReducer'
import NavBar from './components/NavBar'
import Landing from './screens/Landing'
import Placeholder from './screens/Placeholder'

export default function App() {
  const [state, dispatch] = useReducer(gameReducer, initialState)
  const go = (screen) => dispatch({ type: 'GO_TO', screen })

  let content
  switch (state.screen) {
    case 'landing':
      content = <Landing go={go} />
      break
    default:
      content = <Placeholder screen={state.screen} go={go} />
  }

  return (
    <div className="orbit-bg min-h-screen">
      <NavBar go={go} current={state.screen} />
      <main className="mx-auto max-w-5xl px-4 py-10">{content}</main>
    </div>
  )
}