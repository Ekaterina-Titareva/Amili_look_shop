import './app.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Footer from './Components/Footer/Footer.jsx'
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy.jsx';
import AllGoods from './Components/AllGoods/AllGoods.jsx';
import ItemOfAllGoods from './Components/AllGoods/ItemOfAllGoods/ItemOfAllGoods.jsx'
import Category from './Components/Categories/Category/Category.jsx';
import ItemCard from './Components/Categories/Category/ItemId/ItemCard.jsx';
import NotFound from './404.jsx'
import {goods, categories}  from '../public/assets/data/data.js';


function App() {
    const handleMouseOver = (e) => {
        e.target.src = `${e.target.src.slice(0, -5) + 2 + e.target.src.slice(-4)}`;
    }
    const handleMouseOut = (e) => {
        e.target.src = `${e.target.src.slice(0, -5) + 1 + e.target.src.slice(-4)}`;
    };

	return (
	<Router>
		< Header />
		<Routes>
				<Route path='/' element={
					< Home 
						goods={goods} 
						categories={categories} 
						handleMouseOver={handleMouseOver} 
						handleMouseOut={handleMouseOut}
					/>} 
				/>
				<Route path='/categories/:categoryId' element={
					< Category 
						goods={goods} 
						categories={categories} 
						handleMouseOver={handleMouseOver} 
						handleMouseOut={handleMouseOut}
					/>} 
				/>
				<Route path='/categories/:categoryId/:itemId' element={
					< ItemCard 
						goods={goods} 
						categories={categories}
					/>} 
				/>
				<Route path='/about' element={
					< About />} 
				/>
				<Route path='/allGoods' element={
					< AllGoods 
						goods={goods} 
						handleMouseOver={handleMouseOver} 
						handleMouseOut={handleMouseOut}
					/>} 
				/>
				<Route path='/allGoods/:id' element={
					< ItemOfAllGoods 
						goods={goods} 
						handleMouseOver={handleMouseOver}
						handleMouseOut={handleMouseOut}
						/>} 
					/>
				<Route path='/privacyPolicy' element={
					< PrivacyPolicy />} 
				/>
				<Route path='/*' element={
					< NotFound />} 
				/>
		</Routes>
		< Footer />
	</Router>
	)
}

export default App
