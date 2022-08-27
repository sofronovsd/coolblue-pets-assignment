import React from 'react';
import './PetsDirectorySection.scss';
import Button from '../../ui/Button';
import CircleButton from '../../ui/CircleButton';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions';

const PetsDirectorySection = () => {
	const dispatch = useDispatch();
	
	const handleOnSeeAllClick = React.useCallback(() => {
		dispatch(
			actions.filter.reset({})
		)
	}, [])
	
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
					<div className="PetsDirectorySection-article-button--main">
						<Button
							onClick={handleOnSeeAllClick}
							color="primary"
						>
							See all
						</Button>
					</div>
					<div className="PetsDirectorySection-article-button--small">
						<CircleButton onClick={handleOnSeeAllClick} />
					</div>
				</div>
			</article>
		</section>
	);
};

export default PetsDirectorySection;
