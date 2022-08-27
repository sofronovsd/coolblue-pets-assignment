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
	const filterAvailable = state.filter.available;
	const pets = state.pets.data;
	console.log({
		filterValue,
		filterType,
		filterAvailable,
		pets,
	});
	if (!filterValue
		&& !filterType
		&& !filterAvailable
	) return pets.map(pet => pet.id);
	return pets
		.filter(pet => {
			let isExistByValue = true;
			if (filterValue) {
				isExistByValue = pet.name.indexOf(filterValue) >= 0
			}
			let isExistByType = true;
			if (filterType) {
				isExistByType = pet.species === filterType;
			}
			let isExistByAvailability = true;
			if (filterAvailable) {
				isExistByType = pet.available === filterAvailable;
			}
			console.log({
				isExistByValue,
				isExistByType,
				isExistByAvailability,
				pet
			});
			return isExistByValue
				&& isExistByType
				&& isExistByAvailability;
		})
		.map(pet => pet.id)
}
