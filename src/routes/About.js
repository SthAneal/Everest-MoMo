import React,{useEffect} from 'react';
import {FlexDiv, ImageHolder, Title} from '../styles/globalStylesComponent';

import backgroundImg from '../assets/aboutusbg.png';

const About = ()=>{
    return(
        <FlexDiv direction="column" padding="1em">
            <FlexDiv Width="100%" overflowX="visible" overflowY="visible">
                <ImageHolder Height="400px" image={backgroundImg} className="shadow" borderRadius="1em"/>
            </FlexDiv>
            <FlexDiv Width="100%" margin="5em 0 0">
                <Title fontWeight="600" fontSize="1.7em" textTransform="uppercase" color="#29335C">About Us</Title>
            </FlexDiv>
        </FlexDiv>
    )
}

export default About;