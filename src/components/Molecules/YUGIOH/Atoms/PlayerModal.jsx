import React from 'react';

const PlayerModal = ({ handleChange }) => {
    return (
        <div>
            <h2>Cuantos jugadores?</h2>
            <input
                min = { 2 }
                type = "number"
                onChange = { handleChange }
                max = { 8 }
                placeholder = "0"
            />
        </div>
    )
}

export default PlayerModal;