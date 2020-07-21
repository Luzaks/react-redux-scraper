import { BUY_POKEMON } from './actionTypes';

const buy_pokemon_action = (cant) => {
    return {
        type: BUY_POKEMON,
        payload: cant
    }
};

export {
    buy_pokemon_action
}