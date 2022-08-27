import React from 'react';
import './PetsDirectorySection.scss';
import Button from '../../ui/Button';

const PetsDirectorySection = () => {
	
	return (
		<section className="PetsDirectorySection">
			<img
				className="PetsDirectorySection-image"
				src="/images/treats.jpeg"
				alt="treats"
			/>
			<article className="PetsDirectorySection-article">
				<div className="PetsDirectorySection-article-wrapper">
					<h2 className="text-h2 PetsDirectorySection-title">Pets directory</h2>
					<p className="text PetsDirectorySection-description">
						See all pets available for adoption, promote them and get them home.
					</p>
					<Button
						onClick={() => {}}
						color="primary"
					>
						See all
					</Button>
				</div>
			</article>
		</section>
	);
};

export default PetsDirectorySection;
