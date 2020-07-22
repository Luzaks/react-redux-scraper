import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import fetch_pokemon from '../../actions/actions';

const SearchPokemon = () => {
    const dispatch = useDispatch();
    const [name, set_name] = useState('mewtwo');
    return (
        <div className="form-group">
            <label htmlFor="search" className="text-white">Search Pokemon</label>
            <input type="text" className="form-control" id="search"
                   value={name}
                    onChange={
                        (ev) => {
                            set_name(ev.target.value);
                        }
                    }/>
            <button className="btn btn-primary mt-3"
                    onClick={() => {
                        dispatch(fetch_pokemon(name));
                    }}>
                Submit
            </button>
        </div>
    );
};

export default SearchPokemon;