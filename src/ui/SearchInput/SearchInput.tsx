import React from 'react';
import './SearchInput.scss';

type SearchInputProps = {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = (props: SearchInputProps) => {
	const {
		value,
		onChange,
	} = props;
	
	return (
		<input
			type="text"
			className="SearchInput"
			value={value}
			onChange={onChange}
		/>
	);
};

export default SearchInput;
