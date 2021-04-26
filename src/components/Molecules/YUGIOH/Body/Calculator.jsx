import React from 'react';

const Calculator = ({ points, setPoints }) => {

    const handleResultKey = () => {
        if ( points.operator !== '' && points.digit !== '' ) {
            const value = points.operator === '+'
            ? parseInt( points.lp ) + parseInt( points.digit )
            : parseInt( points.lp ) - parseInt( points.digit );
            if ( value <= 0 ) {
                console.log('You lost animal');
            }
            setPoints({
                ...points,
                lp: value
            })
        }
    }

    const handleNumberKeys = ( value ) => {
        setPoints({
            ...points,
            digit: `${ points.digit }${ value }`
        });
    }

    const handleOperator = ( e ) => {
        const value = e.target.value;
        if ( value === '+' || value === '-' ) {
            setPoints({
                ...points,
                operator: value
            });

        }
    }

    const handleDigit = ( e ) => {
        const value = e.target.value;
        !isNaN( value ) && setPoints({
            ...points,
            digit: value
        });
    }

    return (
        <div className="Calculator">
            <div className = "Calculator_screen">
                <span>
                    { points.lp }
                </span>
                <input 
                    type = "text"
                    value = { `${ points.operator }` }
                    onChange = { handleOperator }
                />
                <input 
                    type = "text"
                    value = { `${ points.digit }` }
                    onChange = { handleDigit }
                />
            </div>
            <div className="CalculatorKeys">
                <div className = "resultKey">
                    <span onClick = { handleResultKey }>
                        =
                    </span>
                </div>
                <div className="griKeys">
                    <span
                        onClick = {
                            () => handleNumberKeys( '1' )
                        }
                    >
                        1
                    </span>
                    <span
                        onClick = {
                            () => handleNumberKeys( '2' )
                        }
                    >
                        2
                    </span>
                    <span
                        onClick = {
                            () => handleNumberKeys( '3' )
                        }
                    >
                        3
                    </span>
                    <span
                        onClick = {
                            () => handleNumberKeys( '4' )
                        }
                    >
                        4
                    </span>
                    <span
                        onClick = {
                            () => handleNumberKeys( '5' )
                        }
                    >
                        5
                    </span>
                    <span
                        onClick = {
                            () => handleNumberKeys( '6' )
                        }
                    >
                        6
                    </span>
                    <span
                        onClick = {
                            () => handleNumberKeys( '7' )
                        }
                    >
                        7
                    </span>
                    <span
                        onClick = {
                            () => handleNumberKeys( '8' )
                        }
                    >
                        8
                    </span>
                    <span
                        onClick = {
                            () => handleNumberKeys( '9' )
                        }
                    >
                        9
                    </span>
                    <span
                        onClick = {
                            () => handleNumberKeys( '0' )
                        }
                    >
                        0
                    </span>
                    <span
                        onClick = {
                            () => handleNumberKeys( '00' )
                        }
                    >
                        00
                    </span>
                    <span
                        onClick = {
                            () => handleNumberKeys( '000' )
                        }
                    >
                        000
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Calculator;