import React from 'react';

const ReturnedPokemon = () => {
    return (
        <div>
            <h3 className="text-white">Resultado:</h3>
            <div className="text-warning">Buscar...</div>
            <div className="text-success">
                <img src="" alt=""/>
                <span>pikachu</span>
            </div>
            <span className="text-danger">error</span>
        </div>
    );
};

export default ReturnedPokemon;
