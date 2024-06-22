import React from 'react'
import styled from 'styled-components';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
const Home = () => {
    return (<>
        <HeroSection props={{ name: "Flip-Zone" }} />
        <Services />
    </>);
}


export default Home;