import React from 'react';
import './SearchSection.scss';
import SearchInput from '../../ui/SearchInput';
import {
	useDispatch,
	useSelector,
} from 'react-redux';
import * as actions from '../../store/actions';
import { selectPetTypes } from '../../store/selectors';
import Dropdown from '../../ui/Dropdown';

const SearchSection = () => {
	const [searchValue, setSearchValue] = React.useState('');
	const [searchType, setSearchType] = React.useState('');
	const dispatch = useDispatch();
	
	const handleOnSearchValueChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	}, []);
	
	const handleOnSearchTypeChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
		setSearchType(e.target.value);
	}, []);
	
	const petTypes = useSelector(
		selectPetTypes,
	);
	
	console.log({
		petTypes,
	});
	
	React.useEffect(() => {
		dispatch(
			actions.filter.setValue({
				value: searchValue,
			}),
		);
	}, [searchValue]);
	
	React.useEffect(() => {
		dispatch(
			actions.filter.setType({
				type: searchType,
			}),
		);
	}, [searchType]);
	
	return (
		<section className="SearchSection">
			<h1 className="text-h1 SearchSection-title">Pets</h1>
			<div className="SearchSection-input">
				<SearchInput
					value={searchValue}
					onChange={handleOnSearchValueChange}
				/>
			</div>
			<div className="SearchSection-filters">
				<Dropdown
					title="Type"
					options={petTypes}
					onChange={handleOnSearchTypeChange}
				/>
			</div>
		</section>
	);
};

export default SearchSection;
