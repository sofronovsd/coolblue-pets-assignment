import React from 'react';
import './SearchSection.scss'
import SearchInput from '../../ui/SearchInput';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions';

const SearchSection = () => {
	const [searchValue, setSearchValue] = React.useState('');
	const dispatch = useDispatch();
	
	const handleOnChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	}, [])
	
	React.useEffect(() => {
		dispatch(
			actions.filter.setValue({
				value: searchValue,
			}),
		)
	}, [searchValue])
	
	return (
		<section className="SearchSection">
			<h1 className="text-h1 SearchSection-title">Pets</h1>
			<div className="SearchSection-input">
				<SearchInput
					value={searchValue}
					onChange={handleOnChange}
				/>
			</div>
		</section>
	);
};

export default SearchSection;
