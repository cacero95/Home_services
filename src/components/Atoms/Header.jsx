import React from 'react';

const getDay = () => {
    const time = new Date();
    const days = [
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
        "Domingo"
    ]
    return `${ days[ time.getDay() ] } - ${ time.getHours() }:${ time.getMinutes() }:${ time.getSeconds() }:${ time.getMilliseconds() }`;
}
const Header = () => {   
    return (
        <div id = "Header">
            <div>
                <h2>
                    Bienvenido - { getDay() }
                </h2>
            </div>
        </div>
    )
}
export default Header;