import React, {useContext, useEffect} from 'react';
import {Context as PostContext} from  '../context/PostContext';
import {FlexDiv, Title} from '../styles/globalStylesComponent';

import Slider from '../components/Slider';
import Card from '../components/Card';
import Menu from '../components/Menu';

const Home = ()=>{
    const {state, changeRoute, getPostByAliasName, getChildrensByParentAliasName, getMenu} = useContext(PostContext);
    let cards= null;
    let menus = null;

    useEffect(()=>{
        if(!state.slider)
            getPostByAliasName('slider');
        
        if(!state.todaysspecials)
            getChildrensByParentAliasName('todaysspecials');
        
        if(!state.menu)
            getMenu();
    },[]);

    if(state.todaysspecials){
        cards = state.todaysspecials.childrens.map((child)=>{
            return (
                <Card 
                    key={child.aliasName} 
                    data={child} 
                    Width={state.todaysspecials.childrens.length>=3? `${100/3}%`:'100%' } 
                    OddOrEven={state.todaysspecials.childrens.indexOf(child)}
                />
            )
        });
    }

    if(state.menu){
        console.log(state.menu);
        menus = state.menu.map((item)=>{
            return(
                <Menu 
                    onClick={()=>changeRoute('menu')}
                    key={item.aliasName}
                    data={item}
                    Width={`${100/3}%`}
                    Height="350px"
                    OddOrEven={state.menu.indexOf(item)}
                />
            )
        })
    }
    
    return(
        <FlexDiv direction="column" padding="1em">
            <FlexDiv Width="100%" minHeight="300px" flexWrap="nowrap" borderRadius="4px" position="relative" id="sliderA">
                {state.slider?<Slider parentWrapper="#sliderA" data={state.slider}/> : <FlexDiv className="font-size-loading" alignItem="center" justifyContent="center" minHeight="300px">Loading...</FlexDiv>}
            </FlexDiv>
            <FlexDiv direction="column" Width="100%" margin="5em 0 0" overflowY="visible">
                <Title fontWeight="600" fontSize="1.7em" textTransform="uppercase" color="#29335C">Today's Specials</Title>
                <FlexDiv Width="100%" Height="100%" alignItem="stretch" margin="2em 0 5em" overflowY="scroll" flexWrap="wrap" flexGrow="1">
                    {cards}
                </FlexDiv>

                <Title fontWeight="600" fontSize="1.7em" textTransform="uppercase"  color="#29335C">Our Menu</Title>
                <FlexDiv Width="100%" Height="100%" alignItem="stretch" margin="2em 0" overflowY="scroll" flexWrap="wrap" flexGrow="1">
                    {menus}
                </FlexDiv>

            </FlexDiv>
        </FlexDiv>
    )
}

export default Home;