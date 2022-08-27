import React from 'react';
import './CategoriesSection.scss';
import '../../styles/text.scss';
import Category from '../../ui/Category';

const CategoriesSection = () => {
	
	return (
		<section className="CategoriesSection">
			<h2 className="text-h2">Categories</h2>
			<div className="CategoriesSection-list">
				<Category
					label="All pets"
					icon="heart"
				/>
				<Category
					label="Location specific"
					icon="pin"
				/>
				<Category
					label="Age specific"
					icon="clock"
				/>
				<Category
					label="Available now"
					icon="confettie"
				/>
				<Category
					label="For small or big homes"
					icon="home"
				/>
			</div>
		</section>
	);
};

export default CategoriesSection;
