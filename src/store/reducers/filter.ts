import * as actions from '../actions';
import * as constants from '../constants';
import { Pet } from '../../api/pets';

type ReducerState = {
	value: string;
	type?: string;
}

const initialState: ReducerState = {
	value: '',
}

const reducer = (
	state: ReducerState = initialState,
	action:
		| ReturnType<typeof actions.filter.setValue>
		| ReturnType<typeof actions.filter.setType>
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
	}
	return state
}

export default reducer
