import { combineReducers } from 'redux';
import games from './games_reducer';
import consoles from './consoles_reducer';

const rootReducer = combineReducers({
    games: games,
    consoles: consoles
});

export default rootReducer;
