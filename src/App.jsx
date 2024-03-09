import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './app.scss'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import About from './Components/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header className="wrapper" />

< About />

	<section id="goods" className="container">
		<h2 className="goods__title">наши товары</h2>
		<article className="goods__items">

		</article>
	</section>
	<section id="instagram" className="container">

	</section>

<Footer />




























      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
