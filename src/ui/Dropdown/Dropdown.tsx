import React from 'react';
import './Dropdown.scss';

export type DropdownItem = {
	label: string;
	value: string;
}

type DropdownProps = {
	options: string[];
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	title: string;
	value: string;
}

const Dropdown = (props: DropdownProps) => {
	const {
		title,
		value,
		options,
		onChange,
	} = props;
	
	return (
		<select
			className="Dropdown"
			onChange={onChange}
			value={value}
		>
			<option value="">{title}</option>
			{options.map((item) => (
				<option value={item} key={item}>{item}</option>
				)
			)}
		</select>
	);
};

export default Dropdown;
