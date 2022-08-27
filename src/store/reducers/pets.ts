import * as actions from '../actions';
import * as constants from '../constants';
import { Pet } from '../../api/pets';

type ReducerState = {
	data: Pet[];
	status: 'none' | 'request' | 'success' | 'error';
	error: string;
}

const initialState: ReducerState = {
	data: [],
	status: 'none',
	error: '',
}

const reducer = (
	state: ReducerState = initialState,
	action:
		| ReturnType<typeof actions.pets.fetch>
		| ReturnType<typeof actions.pets.success>
		| ReturnType<typeof actions.pets.error>
): ReducerState => {
	switch (action.type) {
		case constants.PETS.FETCH:
			return {
				...state,
				status: 'request',
				error: '',
			}
		case constants.PETS.SUCCESS:
			const {
				payload,
			} = action;
			const {
				pets,
			} = payload;
			return {
				...state,
				status: 'success',
				error: '',
				data: pets,
			}
		case constants.PETS.ERROR:
			return {
				...state,
				status: 'error',
				error: 'error',
			}
	}
	return state
}

export default reducer
