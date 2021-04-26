import React, { useState } from 'react';
import Background from '../../../../assets/imgs/Tefnuif_dragon_of_galaxy.png';
import YuModal from '../Atoms/YuModal';
import Calculator from './Calculator';

const LpPoints = ({ number, score }) => {

    const [ points, setPoints ] = useState ({
        lp: score,
        operator: '',
        digit: ''
    });
    const [ activateModal, setActivate ] = useState( false );

    const handleClick = () => {
        setActivate( true );
    }
    console.log( points );
    return (
        <div 
            className = "playerPoints"
            style = {{ backgroundImage: `url(${ Background })` }}
            onClick = { handleClick }
        >
            <span>
                { points.lp }
            </span>
            <YuModal
                activate_settings = { activateModal }
                handleClose = {
                    () => setActivate ( false )
                }
                content = { 
                    <Calculator
                        points = { points }
                        setPoints = { setPoints }
                    /> 
                }
            />
        </div>
    )
}
export default LpPoints;