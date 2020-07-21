import { combineReducers } from 'redux';
import games_reducer from './games_reducer'

export default combineReducers({
    games: games_reducer
});

