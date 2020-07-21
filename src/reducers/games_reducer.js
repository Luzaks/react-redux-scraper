import { BUY_POKEMON } from '../actions/actionTypes';

const games_reducer = (state = [], action) => {
    switch(action.type) {
        case BUY_POKEMON:
            return {
                pokemon: state[0].pokemon - action.payload
            };
         default: return state;
    }
};
export default games_reducer;