import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import bladesReducer from './reducers/bladesReducer';

const reducers = combineReducers({
    blades: bladesReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;


const store = createStore(
    reducers,
	composeEnhancer(applyMiddleware(thunk)),
);

export default store;