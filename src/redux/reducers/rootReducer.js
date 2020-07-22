import { combineReducers } from 'redux';
import games from './games_reducer';
import consoles from './consoles_reducer';
import search from './search_reducer'

const rootReducer = combineReducers({
    games: games,
    consoles: consoles,
    search: search
});

export default rootReducer;
