import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="shell-header">
        <div className="brand">
          <span className="dot" />
          <div>
            <p className="eyebrow">App Shell</p>
            <h1>Vite + React + TS</h1>
          </div>
        </div>
        <nav>
          <button className="ghost">Docs</button>
          <button className="primary">Get Started</button>
        </nav>
      </header>

      <main className="shell-main">
        <section className="panel">
          <p className="eyebrow">Overview</p>
          <h2>Drop your first component here</h2>
          <p className="muted">
            Replace this section with your own layout. The project is prewired with TypeScript,
            React, Vite, and fast HMR. Edit <code>src/App.tsx</code> to begin.
          </p>
        </section>

        <section className="panel grid">
          <div>
            <p className="eyebrow">Commands</p>
            <ul>
              <li>
                <code>npm run dev</code> — start the dev server
              </li>
              <li>
                <code>npm run build</code> — create a production bundle
              </li>
              <li>
                <code>npm run lint</code> — run TypeScript + ESLint checks
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Next steps</p>
            <ul>
              <li>Add routes or state management</li>
              <li>Swap out styles for your design system</li>
              <li>Wire APIs and real data</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
