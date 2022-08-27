import React from 'react';
import './Category.scss';

type CategoryProps = {
	label: string;
	icon: string;
	onClick: () => void;
}

const Category = (props: CategoryProps) => {
	const {
		label,
		icon,
		onClick,
	} = props;
	return (
		<article
			className="Category"
			onClick={onClick}
		>
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
