import React, {useEffect, useContext}from 'react';
import {Context as PostContext} from  '../context/PostContext';
import {FlexDiv, ImageHolder, Title} from '../styles/globalStylesComponent';

import { ReactComponent as SearchIcon} from '../assets/magnifying-glass.svg';

const Menu = ()=>{
    const {state, getMenu} = useContext(PostContext);
    useEffect(()=>{
        if(!state.menu)
            getMenu();
    },[]);

    return(
        <FlexDiv direction="column" padding="1.5em 1em 0">
            <Title Width="100%" fontWeight="600" fontSize="1.7em" textTransform="uppercase" color="#29335C">Our Menu</Title>
            <FlexDiv Width="80%" alignSelf="center" margin="5em 0" padding="0.5em 1em" borderRadius="1em" className="search" justifyContent="space-between">
                <input className="search__input" type="text" placeholder="Search your favourite food..."/>
                <div className="search__btn">
                    <SearchIcon/>
                </div>
            </FlexDiv>
            <FlexDiv Width="100%">
                menu list
            </FlexDiv>
        </FlexDiv>
    )
}

export default Menu;