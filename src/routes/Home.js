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
        <FlexDiv direction="column">
            <FlexDiv Width="100%" flexWrap="nowrap" position="relative" id="sliderA">
                    {state.slider?<Slider parentWrapper="#sliderA" data={state.slider}/> : <div>Loading...</div>}
            </FlexDiv>

            <FlexDiv Width="100%" flexWrap="nowrap" position="relative" id="sliderB">
                    {state.slider?<Slider parentWrapper="#sliderB" data={state.slider}/> : <div>Loading...</div>}
            </FlexDiv>




           


        </FlexDiv>
    )
}

export default Home;