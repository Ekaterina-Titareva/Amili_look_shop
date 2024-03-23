import './app.scss'
import Header from './Components/Header/Header.jsx'
// import About from './Components/About/About.jsx'
import Catalog from './Components/Catalog/Catalog.jsx'
import Reviews from './Components/Reviews/Reviews.jsx';
import Footer from './Components/Footer/Footer'

function App() {

	return (
	<>
		< Header />
		<main className='wrapper'>
			{/* < About /> */}
			< Catalog />
			< Reviews />
		</main>
		< Footer />
	</>
	)
}

export default App
