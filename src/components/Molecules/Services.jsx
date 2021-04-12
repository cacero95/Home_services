import React from 'react';
import { withRouter } from 'react-router';
import Header from '../Atoms/Header';
import AnimeServices from '../Organism/AnimeServices';
import YugiohServices from '../Organism/YugiohServices';

const Services = ({ match }) => {
    const { type, title } = match.params;
    const typeSerices = () => {
        switch ( type ) {
            case 'Yugioh':
                return <YugiohServices />
            case 'Anime':
                return <AnimeServices />
            default:
                return <div></div>
        }
    }

    return (
        <div className = "MainContainer">
            <Header />
            <div className="HomeBody">
                <div className = "topics_title">
                    <h2>{ title }</h2>
                </div>
                { typeSerices() }
            </div>
        </div>
    )
}
export default withRouter( Services );