import React from 'react';
import './App.scss';
import SearchSection from './components/SearchSection';
import ResultsSection from './components/ResultsSection';
import CategoriesSection from './components/CategoriesSection';

function App(): JSX.Element {
	return (
		<div className="container">
			<header>
				<img src="/icons/pet-icon.svg" alt="logo" />
			</header>
			<main>
				{/* filter */}
				<SearchSection />
				
				{/* results */}
				<ResultsSection />
				
				{/* pets directory */}
				<section>
				
				</section>
				
				{/* categories */}
				<CategoriesSection />
			
			</main>
			<footer>
			
			</footer>
		</div>
	);
}

export default App;
