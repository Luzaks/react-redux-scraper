import React from 'react';
import { useDispatch } from 'react-redux';
import { buy_pokemon_action, return_pokemon_action } from '../../actions/actions';

const BuyGameHook = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <button className="btn btn-dark btn-sm mb-2"
                    onClick={() => {
                        dispatch(buy_pokemon_action(1));
                    }
                    }>
                Buy
            </button>
            <button className="btn btn-dark btn-sm mb-1"
                    onClick={() => {
                        dispatch(return_pokemon_action(1));
                    }}>
                Return
            </button>
        </div>
    );
};

export default BuyGameHook;