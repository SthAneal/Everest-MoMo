import React, {useContext, useEffect} from 'react';
import {Context as PostContext} from  '../context/PostContext';
import {FlexDiv, FlexChild} from '../styles/globalStylesComponent';
import Slider from '../components/Slider';

const Home = ()=>{
    const {state, getPostByAliasName} = useContext(PostContext);
    useEffect(()=>{
        if(!state.slider)
            getPostByAliasName('slider');
    },[]);

    return(
        <FlexDiv direction="column" padding="1em">
            <FlexDiv Width="100%" minHeight="300px" flexWrap="nowrap" borderRadius="4px" position="relative" id="sliderA">
                {state.slider?<Slider parentWrapper="#sliderA" data={state.slider}/> : <FlexDiv className="font-size-loading" alignItem="center" justifyContent="center" Height="100%">Loading...</FlexDiv>}
            </FlexDiv>
            <FlexDiv>
                this is the rest.
            </FlexDiv>
        </FlexDiv>
    )
}

export default Home;