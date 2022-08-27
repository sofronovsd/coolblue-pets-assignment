import { StoreState } from '../reducers';

export const selectFilteredPetsIds = (
	state: StoreState,
) => {
	const filterValue = state.filter.value;
	const pets = state.pets.data;
	console.log({
		filterValue,
		pets,
	});
	if (!filterValue) return pets.map(pet => pet.id);
	return pets
		.filter(pet => {
			console.log({
				pet,
				first: pet.name.indexOf(filterValue),
				second: pet.species.indexOf(filterValue),
			});
			return (pet.name.indexOf(filterValue) >= 0 || pet.species.indexOf(filterValue) >= 0)
		})
		.map(pet => pet.id)
}
