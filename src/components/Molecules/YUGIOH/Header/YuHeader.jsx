import React from 'react';
import History from '../../../../assets/imgs/history.svg';
import Dices from '../../../../assets/imgs/dices.svg';
const YuHeader = () => {
    return (
        <div className = "Yuheader">
            <div className = "YuDices">
                <img src = { Dices } alt = "dices"/>
            </div>
            <div className="YuTitle">
                <span>
                    YU-GI-OH!
                </span>
            </div>
            <div className = "history_games">
                <img src = { History } alt=""/>
            </div>
        </div>
    )
};

export default YuHeader;