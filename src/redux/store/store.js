import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers/rootReducer';
import initialState from '../state/initialState';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

export default store;