import React from 'react';
import './SearchSection.scss'
import SearchInput from '../../ui/SearchInput';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions';
import '../../styles/text.scss';

const SearchSection = () => {
	const [searchValue, setSearchValue] = React.useState('');
	const dispatch = useDispatch();
	
	const handleOnChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	}, [])
	
	React.useEffect(() => {
		dispatch(
			actions.pets.fetch({}),
		)
	}, [searchValue])
	
	return (
		<section className="SearchSection">
			<h1 className="text-h1">Pets</h1>
			<SearchInput
				value={searchValue}
				onChange={handleOnChange}
			/>
		</section>
	);
};

export default SearchSection;
