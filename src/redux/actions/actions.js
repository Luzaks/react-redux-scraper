import {
    BUY_POKEMON,
    RETURN_POKEMON,
    BUY_CONSOLE,
    RETURN_CONSOLE,
    FETCH_REQUEST,
    FETCH_SUCCESS, FETCH_FAILURE
} from './actionTypes';
import Axios from 'axios';

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

const fetch_request = () => {
    return {
        type: FETCH_REQUEST
    }
};

const fetch_success = (pokemon) => {
    return {
        type: FETCH_SUCCESS,
        payload: pokemon
    }
};

const fetch_failure = (error) => {
    return {
        type: FETCH_FAILURE,
        payload: error
    }
};

const fetch_pokemon = (value) => {
    return (dispatch) => {
        dispatch(fetch_request());
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
            .then((r) => {
                dispatch(fetch_success([r.data]))
             })
            .catch(onerror => {
                dispatch(fetch_failure('Ups.'))
            });
    }
};

export {
    buy_pokemon_action,
    return_pokemon_action,
    buy_console_action,
    return_console_action,
    fetch_request,
    fetch_success,
    fetch_failure,
}

export default fetch_pokemon;