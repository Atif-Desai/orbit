const STEPS = [
  { icon: '⚡', title: 'Share your power', text: 'You only have so much power each sol. Choose what gets it.' },
  { icon: '☀️', title: 'Beat space weather', text: 'Storms and breakdowns will test your base. Prepare or pay the price.' },
  { icon: '🔬', title: 'Learn real science', text: 'Every surprise comes with a real fact about living in space.' },
]

export default function Landing({ go }) {
  return (
    <section className="text-center">
      <p className="text-sm uppercase tracking-widest text-cyan-400">
        Outpost Resource &amp; Base Intelligence Trainer
      </p>
      <h1 className="mt-3 text-5xl font-extrabold text-white sm:text-6xl">
        Command a base on the <span className="text-cyan-300">Moon</span>
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
        Keep your crew alive for 14 sols. A <strong>sol</strong> is one day at the outpost.
        Every choice you make costs something, just like for real astronauts.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => go('envSelect')}
          className="rounded-lg bg-cyan-500 px-8 py-3 text-lg font-bold text-slate-950 hover:bg-cyan-400 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-200"
        >
          Start Mission
        </button>
        <button
          onClick={() => go('sources')}
          className="rounded-lg border border-cyan-700 px-8 py-3 text-lg text-cyan-200 hover:bg-slate-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-200"
        >
          See the NASA science
        </button>
      </div>

      <ul className="mt-12 grid gap-4 sm:grid-cols-3">
        {STEPS.map((s) => (
          <li key={s.title} className="rounded-xl border border-cyan-900/70 bg-slate-900/60 p-5 text-left">
            <div className="text-3xl" aria-hidden="true">{s.icon}</div>
            <h2 className="mt-2 text-xl font-semibold text-cyan-200">{s.title}</h2>
            <p className="mt-1 text-slate-300">{s.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}