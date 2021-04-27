import React from 'react';
import Minus from '../../../../assets/imgs/minus.svg';

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
                <span className = "Lp">
                    { points.lp }
                </span>
                <div
                    onClick = {
                        () => {
                            setPoints ({
                                ...points,
                                operator: points.operator === '-'
                                ? '+' : '-'
                            })
                        }
                    }
                    className = "CalculatorOperator"
                >
                    {
                        points.operator === '+' ? (
                            <svg height="448pt" viewBox="0 0 448 448" width="448pt" xmlns="http://www.w3.org/2000/svg"><path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"/></svg>
                        ) : (
                            <img src = { Minus } alt = "plus"></img>
                        )
                    }
                </div>
                <input 
                    type = "text"
                    value = { `${ points.digit }` }
                    onChange = { handleDigit }
                    onKeyDown = {
                        (e) => {
                            e.key === 'Enter' && handleResultKey();
                        }
                    }
                />
            </div>
            <div className="CalculatorKeys">
                <div
                    onClick = { handleResultKey }
                    className = "resultKey"
                >
                    <span>
                        =
                    </span>
                </div>
                <div className="gridKeys">
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