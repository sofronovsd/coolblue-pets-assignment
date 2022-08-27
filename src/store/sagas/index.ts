import { all } from "redux-saga/effects";
import { watchPetsFetch } from './pets';

export default function* rootSaga() {
	yield all([
		watchPetsFetch(),
	])
}
