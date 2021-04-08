import React from 'react';
import Header from '../Atoms/Header';
import Topics from '../Organism/Topics';

const Home = () => {
    return (
        <div className="MainContainer">
            <Header/>
            <div className = "HomeBody">
                <div className = "topics_title">
                    <h2>Temas</h2>
                </div>
                <Topics/>
            </div>
        </div>
    )
}
export default Home;

/**
 * images size
 * width: 200
 * height: 249
 */