import React, { Fragment, useState } from 'react';
import YuHeader from './Header/YuHeader';
import SweetAlert from 'react-bootstrap-sweetalert';
import LpPoints from './Body/LpPoints';


const LpCalculator = () => {

    const [ lpState, setlpState ] = useState({
        lpPoints: 8000,
        lpRequest: true,
        playersRequest: true,
        numberPlayers: 2
    });

    const buildLp = () => {
        return [ ...Array( lpState.numberPlayers ).keys() ].map(( index ) => {
            return (
                <LpPoints
                    number = { index }
                    score = { lpState.lpPoints }
                />
            )
        })
    }

    return (
        <div className="YuContainer">
            <YuHeader />

            {
                !lpState.playersRequest && !lpState.lpRequest ? (
                    <div className="YuBody">
                        { buildLp() }
                    </div>
                ) : (
                    <Fragment></Fragment>
                )
            }

            <SweetAlert
                show = { lpState.lpRequest }
                title = "Puntos de vida?"
                type = "input"
                inputType = "number"
                confirmBtnText = "Confirmar"
                confirmBtnCssClass = "btn_lp_confirm"
                onConfirm = {
                    inputValue => {
                        inputValue = parseInt( inputValue );
                        setlpState({
                            ...lpState,
                            lpPoints: inputValue <= 0 ? 8000 : inputValue,
                            lpRequest: false
                        })
                    }
                }
            />

            <SweetAlert
                show = { lpState.playersRequest }
                title = "Cuantos jugadores?"
                type = "input"
                inputType = "number"
                confirmBtnText = "Confirmar"
                confirmBtnCssClass = "btn_lp_confirm"
                onConfirm = {
                    inputValue => {
                        inputValue = parseInt( inputValue );
                        setlpState({
                            ...lpState,
                            playersRequest: false,
                            numberPlayers: inputValue < 2 ? 2 : inputValue
                        })
                    }
                }
            />
        </div>
    );
}
export default LpCalculator;