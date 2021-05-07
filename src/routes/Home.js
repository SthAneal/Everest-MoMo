import React, {useContext, useEffect} from 'react';
import {Context as PostContext} from  '../context/PostContext';
import {FlexDiv, Title} from '../styles/globalStylesComponent';
import Slider from '../components/Slider';
import Card from '../components/Card';

const Home = ()=>{
    const {state, getPostByAliasName, getChildrensByParentAliasName} = useContext(PostContext);
    let cards= null;
    useEffect(()=>{
        if(!state.slider)
            getPostByAliasName('slider');
        
        if(!state.todaysspecials)
            getChildrensByParentAliasName('todaysspecials');
        
    },[]);

    if(state.todaysspecials){
        cards = state.todaysspecials.childrens.map((child)=>{
            return (
                <Card key={child.aliasName} data={child} Width={state.todaysspecials.childrens.length>=3? `${100/3}%`:'100%' } OddOrEven={state.todaysspecials.childrens.indexOf(child)}/>
            )
        });
    }
    
    return(
        <FlexDiv direction="column" padding="1em">
            <FlexDiv Width="100%" minHeight="300px" flexWrap="nowrap" borderRadius="4px" position="relative" id="sliderA">
                {state.slider?<Slider parentWrapper="#sliderA" data={state.slider}/> : <FlexDiv className="font-size-loading" alignItem="center" justifyContent="center" Height="100%">Loading...</FlexDiv>}
            </FlexDiv>
            <FlexDiv direction="column" Width="100%" margin="1em 0" padding="1em 0" overflowX="visible" overflowY="visible">
                <Title fontWeight="500" fontSize="1.7em">Today's specials</Title>
                <FlexDiv Width="100%" Height="100%" alignItem="stretch" padding="1em 0" overflowX="visible" overflowY="scroll" flexWrap="wrap" flexGrow="1">
                    {cards}
                </FlexDiv>
            </FlexDiv>
        </FlexDiv>
    )
}

export default Home;