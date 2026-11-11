const FLOW = {
  envSelect: 'setup',
  setup: 'briefing',
  briefing: 'dashboard',
  dashboard: 'report',
  report: 'landing',
  sources: 'landing',
}

export default function Placeholder({ screen, go }) {
  const next = FLOW[screen]
  return (
    <section className="rounded-xl border border-cyan-900/70 bg-slate-900/60 p-8 text-center">
      <h1 className="text-3xl font-bold text-cyan-300">Screen: {screen}</h1>
      <p className="mt-2 text-slate-300">This screen is coming in a later phase.</p>
      {next && (
        <button
          onClick={() => go(next)}
          className="mt-6 rounded-lg bg-cyan-500 px-6 py-2 font-bold text-slate-950 hover:bg-cyan-400"
        >
          Continue
        </button>
      )}
    </section>
  )
}