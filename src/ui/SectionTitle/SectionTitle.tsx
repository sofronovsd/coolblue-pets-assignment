import React from 'react';
import './SectionTitle.scss';

type SectionTitleProps = {
	children: string;
}

const SectionTitle = (props: SectionTitleProps) => {
	const {
		children,
	} = props;
	
	return (
		<h2 className="SectionTitle">
			{children}
		</h2>
	);
};

export default SectionTitle;
