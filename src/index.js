import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from "./reducers/rootReducer";
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { buy_pokemon_action, return_pokemon_action } from './actions/actions';
import initialState from './state/initialState';


const store = createStore(
    rootReducer,
    initialState
);
console.log('inicial:', store.getState());
store.subscribe(() => {
    console.log('cambio:', store.getState());
});

store.dispatch(buy_pokemon_action(3));
store.dispatch(return_pokemon_action(2));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
