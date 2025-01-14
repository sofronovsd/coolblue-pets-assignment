import React from 'react';
import './ResultsSection.scss';
import { useSelector } from 'react-redux';
import {
	selectFilteredPetsIds,
} from '../../store/selectors';
import PetCard from '../../ui/PetCard';

const ResultsSection = () => {
	const petsIds = useSelector(
		selectFilteredPetsIds,
	);
	
	return (
		<section className="ResultsSection">
			<h2 className="text-h2 ResultsSection-title">Results</h2>
			<div className="ResultsSection-pets">
				{petsIds.map(petId => (
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
