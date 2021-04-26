import React, { useState } from 'react';
import YuHeader from './Header/YuHeader';
import LpPoints from './Body/LpPoints';
import YuModal from './Atoms/YuModal';
import PlayerModal from './Atoms/PlayerModal';

const LpCalculator = () => {

    const [ lpState, setlpState ] = useState ({
        lpPoints: 8000,
        numberPlayers: 2,
        activate_settings: false
    });

    const handleChange = ( event ) => {
        // delete the decimal to aproximate the number
        const value = parseInt( event.target.value );
        setlpState({
            ...lpState,
            numberPlayers: value % 1 === 0 
            ? value : Math.floor( value )
        });
    }

    return (
        <div className="YuContainer">
            <YuHeader />
            <div className="YuBody">
                {
                    [ ...Array( lpState.numberPlayers ).keys() ].map(( index ) => {
                        return (
                            <LpPoints
                                key = { index }
                                number = { index }
                                score = { lpState.lpPoints }
                            />
                        )
                    })
                }
            </div>
            <YuModal
                activate_settings = { lpState.activate_settings }
                handleClose = {
                    () => setlpState({
                        ...lpState, activate_settings: false
                    })
                }
                content = {
                    <PlayerModal
                        handleChange = { handleChange }
                    /> 
                }
            />
        </div>
    );
}
export default LpCalculator;