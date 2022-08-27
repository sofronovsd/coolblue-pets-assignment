import React from 'react';
import './App.scss';
import SectionTitle from './ui/SectionTitle';
import SearchSection from './components/SearchSection';
import ResultsSection from './components/ResultsSection';

function App(): JSX.Element {
	return (
		<div className="container">
			<header>
				<img src="icons/pet-icon.svg" alt="logo" />
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
				<section>
					<SectionTitle>Categories</SectionTitle>
				
				</section>
			
			</main>
			<footer>
			
			</footer>
		</div>
	);
}

export default App;
