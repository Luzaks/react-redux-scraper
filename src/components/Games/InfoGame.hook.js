import React from 'react';
import {useSelector} from 'react-redux';

const InfoGameHook = () => {
    const games = useSelector((state) => state.games);
    return (
        <React.Fragment>
            Stock: { games.pokemon }
        </React.Fragment>
    );
};



export default InfoGameHook;
