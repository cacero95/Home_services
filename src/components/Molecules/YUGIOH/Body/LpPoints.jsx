import React, { useState } from 'react';
import Background from '../../../../assets/imgs/Tefnuif_dragon_of_galaxy.png';
import YuModal from '../Atoms/YuModal';
import Calculator from './Calculator';


let tick = 'available';
const LpPoints = ({ number, score }) => {

    const myRef = React.createRef();
    const [ points, setPoints ] = useState ({
        lp: score,
        operator: '-',
        digit: ''
    });
    const [ activateModal, setActivate ] = useState( false );

    const handleClick = () => {
        if ( tick === 'available' ) {
            setActivate( true );
        }
        tick = 'available';
    }
    const handleClose = () => {
        tick = 'block'
        setActivate( false );
    }
    
    return (
        <div 
            className = "playerPoints"
            ref = { myRef }
            style = {{ backgroundImage: `url(${ Background })` }}
            onClick = {
                () => handleClick()
            }
        >
            <span>
                { points.lp }
            </span>

            <YuModal
                activate_settings = { activateModal }
                handleClose = { handleClose }
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