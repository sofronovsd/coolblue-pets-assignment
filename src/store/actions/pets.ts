import * as constants from '../constants';
import { Pet } from '../../api/pets';
import { createAction } from '../../utils/actionCreator';

export const fetch = createAction(
	constants.PETS.FETCH,
)<{}>();

export const success = createAction(
	constants.PETS.SUCCESS,
)<{
	pets: Pet[],
}>();

export const error = createAction(
	constants.PETS.ERROR,
)<{
	error: string,
}>();
