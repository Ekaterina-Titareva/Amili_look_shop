// import { useState } from 'react'
import './app.scss'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import {clothes} from './assets/data/data.js'
import {categories} from './assets/data/data.js'


console.log(clothes)
console.log(categories)

function App() {

  return (
    <>
<Header className="wrapper" />

< About />

	<section id="goods" className="container">
		<h2 className="goods__title">Наши товары</h2>
		<article className="goods__items">

		</article>
	</section>
	<section id="instagram" className="container">

	</section>

<Footer />
    </>
  )
}

export default App
