import * as actions from '../actions';
import * as constants from '../constants';
import { Pet } from '../../api/pets';

type ReducerState = {
	value: string;
	type: string;
	available: string;
}

const initialState: ReducerState = {
	value: '',
	type: '',
	available: '',
}

const reducer = (
	state: ReducerState = initialState,
	action:
		| ReturnType<typeof actions.filter.setValue>
		| ReturnType<typeof actions.filter.setType>
		| ReturnType<typeof actions.filter.reset>
		| ReturnType<typeof actions.filter.setIsAvailable>
): ReducerState => {
	switch (action.type) {
		case constants.FILTER.SET_VALUE: {
			const {
				payload,
			} = action;
			const {
				value,
			} = payload;
			return {
				...state,
				value,
			}
		}
		case constants.FILTER.SET_TYPE: {
			const {
				payload,
			} = action;
			const {
				type,
			} = payload;
			return {
				...state,
				type,
			}
		}
		case constants.FILTER.AVAILABLE: {
			const {
				payload,
			} = action;
			const {
				available,
			} = payload;
			return {
				...initialState,
				available,
			}
		}
		case constants.FILTER.RESET: {
			return initialState;
		}
	}
	return state
}

export default reducer
