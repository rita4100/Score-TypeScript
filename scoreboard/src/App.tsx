import { useState } from 'react'
import './App.css'

interface State {
  home: number
  away: number
}

function App() {
  const [score, setScore] = useState<State>({ home: 0, away: 0 })

  function addHomePoint() {
    setScore({ ...score, home: score.home + 1 })
  }

  function addAwayPoint() {
    setScore({ ...score, away: score.away + 1 })
  }

  function resetMatch() {
    setScore({ home: 0, away: 0 })
  }

  let result = 'Zápas je nerozhodný'

  if (score.home > score.away) {
    result = 'Vyhrávají Domácí'
  } else if (score.away > score.home) {
    result = 'Vyhrávají Hosté'
  }

  return (
    <main className="scoreboard">
      <h1>Skóre zápasu</h1>

      <div className="teams">
        <section className="team">
          <h2>Domácí</h2>
          <p className="score">{score.home}</p>
          <button type="button" onClick={addHomePoint}>
            +1 bod
          </button>
        </section>

        <span className="separator">:</span>

        <section className="team">
          <h2>Hosté</h2>
          <p className="score">{score.away}</p>
          <button type="button" onClick={addAwayPoint}>
            +1 bod
          </button>
        </section>
      </div>

      <p className="result">{result}</p>

      <button className="reset-button" type="button" onClick={resetMatch}>
        Reset zápasu
      </button>
    </main>
  )
}

export default App
