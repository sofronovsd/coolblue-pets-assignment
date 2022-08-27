import * as constants from '../constants';
import { createAction } from '../../utils/actionCreator';

export const setValue = createAction(
	constants.FILTER.SET_VALUE,
)<{
	value: string,
}>();

export const setType = createAction(
	constants.FILTER.SET_TYPE,
)<{
	type: string,
}>();

export const reset = createAction(
	constants.FILTER.RESET,
)<{}>();
