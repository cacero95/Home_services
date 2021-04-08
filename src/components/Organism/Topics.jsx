import React from 'react';
import Anime from '../../assets/imgs/animeLogo.png';
import Yugioh from '../../assets/imgs/YU-GI-OH.png';
import Series from '../../assets/imgs/Series.png';

const Topics = () => {
    const handleClick = ( link ) => {
        console.log(link)
    }
    return (
        <div className="Topics">
            <div 
                className="Topic"
                onClick = {
                    () => handleClick( 'Anime' )
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
                    () => handleClick( 'Series' )
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
                    () => handleClick( 'Yugioh' )
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
export default Topics;