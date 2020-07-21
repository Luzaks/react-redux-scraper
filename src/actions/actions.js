import { BUY_POKEMON, RETURN_POKEMON } from './actionTypes';

const buy_pokemon_action = (cant) => {
    return {
        type: BUY_POKEMON,
        payload: cant
    }
};

const return_pokemon_action = (cant) => {
  return {
      type: RETURN_POKEMON,
      payload: cant
  }
};

export {
    buy_pokemon_action,
    return_pokemon_action
}