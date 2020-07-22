import {createStore} from "redux";
import rootReducer from "../reducers/rootReducer";
import initialState from "../state/initialState";
import {buy_pokemon_action} from "../actions/actions";
import { composeWithDevTools } from 'redux-devtools-extension'


const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools()
);
console.log('inicial:', store.getState());
store.subscribe(() => {
    console.log('cambio:', store.getState());
});

store.dispatch(buy_pokemon_action(1));

export default store;