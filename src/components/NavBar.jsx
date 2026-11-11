export default function NavBar({ go, current }) {
  return (
    <header className="border-b border-cyan-900/60 bg-slate-950/70 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <button
          onClick={() => go('landing')}
          className="text-xl font-bold tracking-widest text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          aria-label="ORBIT home"
        >
          ORBIT
        </button>
        <div className="flex gap-2">
          {current !== 'landing' && (
            <button
              onClick={() => go('landing')}
              className="rounded px-3 py-2 text-slate-200 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              Home
            </button>
          )}
          <button
            onClick={() => go('sources')}
            className="rounded px-3 py-2 text-slate-200 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            NASA Data Sources
          </button>
        </div>
      </nav>
    </header>
  )
}