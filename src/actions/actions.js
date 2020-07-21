import { BUY_POKEMON,
         RETURN_POKEMON,
         BUY_CONSOLE,
         RETURN_CONSOLE } from './actionTypes';

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

const buy_console_action = (cant) => {
  return {
      type: BUY_CONSOLE,
      payload: cant
  }
};

const return_console_action = (cant) => {
    return {
        type: RETURN_CONSOLE,
        payload: cant
    }
};

export {
    buy_pokemon_action,
    return_pokemon_action,
    buy_console_action,
    return_console_action
}