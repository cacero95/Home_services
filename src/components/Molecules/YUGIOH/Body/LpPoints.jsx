import React, { useState, useEffect } from 'react';

const LpPoints = ({ number, score }) => {
    const [ player, setplayer ] = useState( number );
    const [ points, setPoints ] = useState(0);
    useEffect(() => {
        setPoints( score );
    }, [ score ])
    return (
        <div className = "playerPoints">
            <span>
                { points }
            </span>
        </div>
    )
}
export default LpPoints;