import React from 'react'
import styled from 'styled-components';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import FeatureProducts from './components/FeatureProducts';
const Home = () => {
    return (<>
        <HeroSection props={{ name: "Flip-Zone" }} />
        <FeatureProducts />
        <Services />
    </>);
}


export default Home;