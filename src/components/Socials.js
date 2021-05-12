import React from 'react';
import {FlexDiv, Title} from '../styles/globalStylesComponent';
import facebook from '../assets/facebook.png';


const Socials = ({data})=>{
    return(
        <FlexDiv className="social" Width="100%" height="200px" direction="row" padding="0.7em 0.7em 5em" justifyContent="center">
            <a href="https://www.facebook.com/theeverestmomo" target="_blank">
                <img src={facebook} alt="facebook link for the everest momo"/>
            </a>
        </FlexDiv>
    )
}

export default Socials;