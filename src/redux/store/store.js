import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducer';
import rootSaga from '../sagas';

const sagasMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagasMiddleware));

sagasMiddleware.run(rootSaga);

export default store;
