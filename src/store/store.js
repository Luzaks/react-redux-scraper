import {createStore} from "redux";
import rootReducer from "../reducers/rootReducer";
import initialState from "../state/initialState";
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools()
);

export default store;