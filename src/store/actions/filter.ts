import * as constants from '../constants';
import { createAction } from '../../utils/actionCreator';

export const setValue = createAction(
	constants.FILTER.SET_VALUE,
)<{
	value: string,
}>();
