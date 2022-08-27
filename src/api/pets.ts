export type Pet = {
	id: number;
	name: string;
	species: string;
	available: string;
	birthYear: number;
	photo: string;
	dateAdded: string;
}

export type FetchPetsResponse = {
	pets: Pet[];
};

export function fetchPetsApi(): Promise<FetchPetsResponse> {
	return fetch('https://61f6e0072e1d7e0017fd6f82.mockapi.io/api/v1/pets')
		.then(result => result.json())
}
