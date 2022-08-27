import { combineReducers } from 'redux';
import pets from './pets';

export const appReducer = combineReducers({
	pets,
});

export type StoreState = ReturnType<typeof appReducer>;
