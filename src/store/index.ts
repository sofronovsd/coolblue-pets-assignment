import { legacy_createStore as createStore, applyMiddleware, Store } from "redux"
import createSagaMiddleware from "redux-saga";
import {
	appReducer,
	StoreState,
} from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store: Store<StoreState> = createStore(
	appReducer,
	applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSaga)
