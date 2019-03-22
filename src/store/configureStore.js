import { createStore, combineReducers, compose } from 'redux';
import placeReducer from './reducers/places';

const rootReducer = combineReducers({
    places: placeReducer
});

let composeEnhancers  = compose;

// this run only in development mode
if(__DEV__){
    composeEnhancers = window.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers());
};

export default configureStore;