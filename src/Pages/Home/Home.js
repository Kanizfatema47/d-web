import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppoinment></MakeAppoinment>
        </div>
    );
};

export default Home;