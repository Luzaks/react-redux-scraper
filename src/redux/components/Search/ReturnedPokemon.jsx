import React from 'react';
import {useSelector} from 'react-redux';

const ReturnedPokemon = () => {
    const searcher = useSelector((state) => state.search);

    return (
        <div>
            <h3 className="text-white">Result:</h3>
            { searcher.loading && <div className="text-warning">Searching...</div>}
            {
                searcher.searched.length >= 1 &&
                <div className="text-success">
                    <img src={searcher.searched[0].sprites.front_default} alt="Pokemon"/>
                    <span>{searcher.searched[0].name}</span>
                </div>
            }
            {
                searcher.error  !== '' && <span className="text-danger">{searcher.error}</span>
            }
        </div>
    );
};

export default ReturnedPokemon;
