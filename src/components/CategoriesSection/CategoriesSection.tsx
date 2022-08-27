import React from 'react';
import './CategoriesSection.scss';
import Category from '../../ui/Category';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions';

const CategoriesSection = () => {
	const dispatch = useDispatch();
	
	const handleOnAllPetsClick = React.useCallback(() => {
		dispatch(
			actions.filter.reset({})
		)
	}, [])
	
	const handleOnAvailableNowClick = React.useCallback(() => {
		dispatch(
			actions.filter.setIsAvailable({
				available: 'Yes',
			})
		)
	}, [])
	
	return (
		<section className="CategoriesSection">
			<h2 className="text-h2">Categories</h2>
			<div className="CategoriesSection-list">
				<Category
					label="All pets"
					icon="heart"
					onClick={handleOnAllPetsClick}
				/>
				<Category
					label="Location specific"
					icon="pin"
					onClick={handleOnAllPetsClick}
				/>
				<Category
					label="Age specific"
					icon="clock"
					onClick={handleOnAllPetsClick}
				/>
				<Category
					label="Available now"
					icon="confettie"
					onClick={handleOnAvailableNowClick}
				/>
				<Category
					label="For small or big homes"
					icon="home"
					onClick={handleOnAllPetsClick}
				/>
			</div>
		</section>
	);
};

export default CategoriesSection;
