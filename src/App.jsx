import './app.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
	<Router>
		< Header />
		<Routes>
				<Route path='/' element={< Catalog />} />
				<Route path='/about' element={< About />} />
				<Route path='/allGoods' element={< AllGoods />} />
				<Route path='/reviews' element={< Reviews />} />
				<Route path='/info' element={<Questions />} />
				<Route path='/privacyPolicy' element={< PrivacyPolicy />} />
		</Routes>
		< Footer />
	</Router>
	)
}

export default App
