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
		<div>
			<img
				src="/icons/search.svg"
				className="SearchInput-icon"
				alt="search-icon"
			/>
			<input
				type="search"
				className="SearchInput"
				placeholder="Search for pets"
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default SearchInput;
