import { StoreState } from '../reducers';

export const selectPets = (
	state: StoreState,
) => (
	state.pets.data
);

export const selectPetsIds = (
	state: StoreState,
) => (
	state.pets.data.map(item => item.id)
);

export const selectPetById = (id: number) => (
	state: StoreState,
) => (
	state.pets.data.find(item => item.id === id)
);

export const selectPetTypes = (
	state: StoreState,
) => (
	[...new Set(state.pets.data
		.map(pet => pet.species))]
);
