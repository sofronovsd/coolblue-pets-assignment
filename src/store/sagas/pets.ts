import { put, takeEvery, call } from 'redux-saga/effects';
import * as constants from '../constants';
import * as actions from '../actions';
import {
	fetchPetsApi,
	FetchPetsResponse,
} from '../../api/pets';

export function* petsFetch() {
	try {
		const result: FetchPetsResponse = yield call(fetchPetsApi);
		
		const {
			pets,
		} = result;
		yield put(
			actions.pets.success({
				pets,
			}),
		)
	} catch (e) {
		yield put(
			actions.pets.error({
				error: `${e}`,
			}),
		)
	}
}

export function* watchPetsFetch() {
	yield takeEvery(constants.PETS.FETCH, petsFetch);
}
