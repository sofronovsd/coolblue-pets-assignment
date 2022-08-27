import React from 'react';
import './App.scss';
import SearchSection from './components/SearchSection';
import ResultsSection from './components/ResultsSection';
import CategoriesSection from './components/CategoriesSection';
import PetsDirectorySection from './components/PetsDirectorySection';
import * as actions from './store/actions';
import { useDispatch } from 'react-redux';

function App(): JSX.Element {
	const dispatch = useDispatch();
	
	React.useEffect(() => {
		dispatch(
			actions.pets.fetch({}),
		)
	}, []);
	
	return (
		<div className="container">
			<header>
				<img src="/icons/pet-icon.svg" alt="logo" />
			</header>
			<main>
				<SearchSection />
				<ResultsSection />
				<PetsDirectorySection />
				<CategoriesSection />
			</main>
			<footer />
		</div>
	);
}

export default App;
