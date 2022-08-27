import React from 'react';
import './PetCard.scss';
import { useSelector } from 'react-redux';
import { selectPetById } from '../../store/selectors';
import Button from '../Button';
import '../../styles/text.scss';

type PetCardProps = {
	id: number;
}

const PetCard = (props: PetCardProps) => {
	const {
		id,
	} = props;
	
	const pet = useSelector(
		selectPetById(id),
	);
	
	if (!pet) return null;
	
	return (
		<article className="PetCard">
			<img
				className="PetCard-photo"
				src={pet.photo}
				alt="pet-photo"
			/>
			<span className="text">{pet.name}</span>
			<div className="PetCard-buttons">
				<Button
					color="secondary"
					onClick={() => {}}
				>
					View
				</Button>
			</div>
		</article>
	);
};

export default PetCard;
