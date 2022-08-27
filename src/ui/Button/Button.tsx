import React from 'react';
import './Button.scss';
import classNames from 'classnames';

type ButtonProps = {
	children: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	color?: 'primary' | 'secondary';
}

const Button = (props: ButtonProps) => {
	const {
		children,
		onClick,
		color = "primary",
	} = props;
	
	return (
		<button
			className={classNames("Button", `Button--${color}`)}
			type="button"
			onClick={onClick}
		>
			<span className="text-h4">{children}</span>
		</button>
	);
};

export default Button;
