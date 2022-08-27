import React from 'react';
import './CircleButton.scss';

type ButtonProps = {
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CircleButton = (props: ButtonProps) => {
	const {
		onClick,
	} = props;
	
	return (
		<button
			className="CircleButton"
			type="button"
			onClick={onClick}
		>
			<img
				className="CircleButton-icon"
				src="/icons/arrow-right.svg"
			/>
		</button>
	);
};

export default CircleButton;
