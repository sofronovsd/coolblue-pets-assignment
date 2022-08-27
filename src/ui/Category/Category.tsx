import React from 'react';
import './Category.scss';

type CategoryProps = {
	label: string;
	icon: string;
}

const Category = (props: CategoryProps) => {
	const {
		label,
		icon,
	} = props;
	return (
		<article className="Category">
			<div className="Category-block" />
			<img
				className="Category-icon"
				src={`icons/${icon}.svg`}
				alt={`${label} icon`}
			/>
			<span className="text-h4">{label}</span>
		</article>
	);
};

export default Category;
