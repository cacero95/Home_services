import React from 'react';
import History from '../../../../assets/imgs/history.svg';
import Dices from '../../../../assets/imgs/dices.svg';
import Settings from '../../../../assets/imgs/settings.svg';

const YuHeader = () => {
    return (
        <div className = "Yuheader">
            <div className = "YuDices">
                <img src = { Dices } alt = "dices"/>
            </div>
            <div className = "history_games">
                <img src = { History } alt=""/>
            </div>
            <div className="YuSettings">
                <img src = { Settings } alt=""/>
            </div>
        </div>
    )
};

export default YuHeader;