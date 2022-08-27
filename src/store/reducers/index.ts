import { combineReducers } from 'redux';
import pets from './pets';
import filter from './filter';

export const appReducer = combineReducers({
	pets,
	filter,
});

export type StoreState = ReturnType<typeof appReducer>;
