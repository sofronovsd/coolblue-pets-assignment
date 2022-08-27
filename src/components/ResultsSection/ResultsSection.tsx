import React from 'react';
import './ResultsSection.scss';
import { useSelector } from 'react-redux';
import {
	selectPetsIds,
} from '../../store/selectors';
import PetCard from '../../ui/PetCard';

const ResultsSection = () => {
	const petsIds = useSelector(
		selectPetsIds,
	);
	console.log({
		petsIds
	});
	
	const ids = petsIds.slice(0, 3);
	
	return (
		<section className="ResultsSection">
			<h2 className="text-h2 ResultsSection-title">Results</h2>
			<div className="ResultsSection-pets">
				{ids.map(petId => (
					<PetCard
						key={petId}
						id={petId}
					/>
				))}
			</div>
		</section>
	);
};

export default ResultsSection;
