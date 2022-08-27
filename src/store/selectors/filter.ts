import { StoreState } from '../reducers';

export const selectFilterValue = (
	state: StoreState,
) => (
	state.filter.value
);

export const selectFilterType = (
	state: StoreState,
) => (
	state.filter.type
);

export const selectFilteredPetsIds = (
	state: StoreState,
) => {
	const filterValue = state.filter.value;
	const filterType = state.filter.type;
	const pets = state.pets.data;
	console.log({
		filterValue,
		filterType,
		pets,
	});
	if (!filterValue && !filterType) return pets.map(pet => pet.id);
	return pets
		.filter(pet => {
			let isExistByValue = true;
			if (filterValue) {
				isExistByValue = (pet.name.indexOf(filterValue) >= 0 || pet.species.indexOf(filterValue) >= 0)
			}
			let isExistByType = true;
			if (filterType) {
				isExistByType = pet.species === filterType;
			}
			return isExistByValue && isExistByType;
		})
		.map(pet => pet.id)
}
