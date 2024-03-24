import './app.scss'
import Header from './Components/Header/Header.jsx'
import About from './Components/About/About.jsx'
import Catalog from './Components/Catalog/Catalog.jsx'
import Reviews from './Components/Reviews/Reviews.jsx';
import Footer from './Components/Footer/Footer'
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy.jsx';
import AllGoods from './Components/AllGoods/AllGoods.jsx';
import Questions from './Components/Questions/Questions.jsx';

function App() {

	return (
	<>
		< Header />
		<main className='wrapper'>
			< Catalog />
			< About /> 
			< AllGoods />
			< Reviews />
			<Questions />
			< PrivacyPolicy />
		</main>
		< Footer />
	</>
	)
}

export default App
