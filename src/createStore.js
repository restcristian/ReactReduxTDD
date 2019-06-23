import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import RootReducer from './reducers';

export const middlewares = [Thunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export const store = createStoreWithMiddleware(RootReducer);