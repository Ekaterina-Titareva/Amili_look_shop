import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './app.scss'
import Header from './Components/Header/Header.jsx'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Footer from './Components/Footer/Footer.jsx'
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy.jsx';
import AllGoods from './Components/AllGoods/AllGoods.jsx';
import ItemOfAllGoods from './Components/AllGoods/ItemOfAllGoods/ItemOfAllGoods.jsx'
import Questions from './Components/Questions/Questions.jsx';
import Categories from './Components/Categories/Categories.jsx'
import Category from './Components/Categories/Category/Category.jsx';
import ItemCard from './Components/Categories/Category/ItemId/ItemCard.jsx';
import NotFound from './404.jsx'
import { goods, categories}  from '../public/assets/data/data.js';

// import ItemOfGoogs from './Components/ItemOfGoods/ItemOfGoods.jsx'

function App() {

	return (
	<Router>
		< Header />
		<Routes>
				<Route path='/' element={< Home />} />
				<Route path='/categories' element={< Categories goods={goods} categories={categories}/>} />
				<Route path='/categories/:categoryId' element={< Category goods={goods} categories={categories}/>} />
				<Route path='/categories/:categoryId/:itemId' element={< ItemCard goods={goods} categories={categories}/>} />
				<Route path='/about' element={< About />} />
				<Route path='/allGoods' element={< AllGoods goods={goods} />} />
				<Route path='/allGoods/:id' element={< ItemOfAllGoods goods={goods} />} />
				<Route path='/questions' element={<Questions />} />
				<Route path='/privacyPolicy' element={< PrivacyPolicy />} />
				<Route path='/*' element={< NotFound />} />
		</Routes>
		< Footer />
	</Router>
	)
}

export default App
