import React from 'react';
import './PetCard.scss';
import { useSelector } from 'react-redux';
import { selectPetById } from '../../store/selectors';
import Button from '../Button';
import CircleButton from '../CircleButton';

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
			<span className="text PetCard-name">{pet.name}</span>
			<div className="PetCard-buttons--main">
				<Button
					color="secondary"
					onClick={() => {}}
				>
					View
				</Button>
			</div>
			<div className="PetCard-buttons--small">
				<CircleButton onClick={() => {}} />
			</div>
		</article>
	);
};

export default PetCard;
