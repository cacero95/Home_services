import React from 'react';
import Anime from '../../assets/imgs/animeLogo.png';
import Yugioh from '../../assets/imgs/YU-GI-OH.png';
import Series from '../../assets/imgs/Series.png';
import { withRouter } from 'react-router';

const Topics = ({ history }) => {
    const handleClick = ( type, title ) => {
        history.push(`/services/${ type }/${ title }`);
    }
    return (
        <div className="Topics">
            <div 
                className="Topic"
                onClick = {
                    () => handleClick( 'Anime', 'ANIME' )
                }
            >
                <div className = "PhotoContent">
                    <img src = { Anime } alt = "Anime"/>
                </div>
                <div>
                    <h3>Anime</h3>
                </div>
            </div>
            <div 
                className="Topic"
                onClick = {
                    () => handleClick( 'Series', 'SERIES' )
                }
            >
                <div className = "PhotoContent">
                    <img src = { Series } alt = "Series"/>
                </div>
                <div>
                    <h3>Series</h3>
                </div>
            </div>
            <div 
                className="Topic"
                onClick = {
                    () => handleClick( 'Yugioh', 'YU-GI-OH!' )
                }
            >
                <div className = "PhotoContent">
                    <img src = { Yugioh } alt = "Yugioh"/>
                </div>
                <div>
                    <h3>YU-GI-OH!</h3>
                </div>
            </div>
        </div>
    )
}
export default withRouter( Topics );