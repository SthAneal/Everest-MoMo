import React, {useContext} from 'react';
import {Context as PostContext} from '../context/PostContext';

import {FlexDiv, FlexChild} from '../styles/globalStylesComponent';

import Home from './Home';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';


const FrontPage = ()=>{
    const {state, changeRoute} = useContext(PostContext);
    const route = state.route;

    const renderPage = ()=>{
        switch(route){
            case 'home':
                return <Home/>;
            case 'about':
                return <About/>;
            case 'menu':
                return <Menu/>;
            case 'contact':
                return <Contact/>;
            default:
                return <About/>
        }
    }

    return(
        <FlexDiv className="main-background" height="100%">
            <FlexDiv width="20%" height="100%">
                <FlexDiv direction="column" width="100%" height="100%" padding="1em" className="nav-bar" justifyContent="flex-start" alignItem="center">
                    <div onClick={()=>{changeRoute('home')}}><div></div><span>Home</span></div> 
                    <div onClick={()=>{changeRoute('about')}}><div></div><span>About</span></div> 
                    <div onClick={()=>{changeRoute('menu')}}><div></div><span>Menu</span></div> 
                    <div onClick={()=>{changeRoute('contact')}}><div></div><span>Contact</span></div> 
                </FlexDiv>
            </FlexDiv>
            <FlexDiv width="60%">
                {renderPage()}
            </FlexDiv>
            <FlexDiv width="20%">right bar</FlexDiv>
        </FlexDiv>
    )
}

export default FrontPage;