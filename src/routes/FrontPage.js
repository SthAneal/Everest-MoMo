import React, {useContext} from 'react';
import {Context as PostContext} from '../context/PostContext';

import {FlexDiv} from '../styles/globalStylesComponent';

import Home from './Home';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';

import logo from '../assets/logo.png'

import { ReactComponent as HomeIcon} from '../assets/home.svg';
import { ReactComponent as AboutusIcon} from '../assets/table.svg';
import { ReactComponent as MenuIcon} from '../assets/menu.svg';
import { ReactComponent as ContactIcon} from '../assets/contact.svg';
import { ReactComponent as TakeawayIcon} from '../assets/takeaway.svg';

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
        <FlexDiv className="main-background" Height="100%" padding="2em">
            <FlexDiv Width="10%" minWidth="70px" maxWidth="150px" Height="100%" margin="0 2em 0 0">
                <FlexDiv direction="column" Width="100%" Height="100%" padding="1em 0 0 0" className="nav-bar" justifyContent="flex-start" alignItem="stretch">
                    <FlexDiv onClick={()=>{changeRoute('home')}} justifyContent="center" className="cursor-pointer"><img src={logo}/></FlexDiv> 
                    <FlexDiv onClick={()=>{changeRoute('home')}} direction="column" alignItem="center" className="selected"><span><HomeIcon/></span><span>Home</span></FlexDiv> 
                    <FlexDiv onClick={()=>{changeRoute('about')}} direction="column" alignItem="center"><span><AboutusIcon/></span><span>About us</span></FlexDiv> 
                    <FlexDiv onClick={()=>{changeRoute('menu')}} direction="column" alignItem="center"><span><MenuIcon/></span><span>Menu</span></FlexDiv> 
                    <FlexDiv onClick={()=>{changeRoute('contact')}} direction="column" alignItem="center"><span><TakeawayIcon/></span><span>Take away</span></FlexDiv> 
                    <FlexDiv onClick={()=>{changeRoute('contact')}} direction="column" alignItem="center"><span><ContactIcon/></span><span>Contact</span></FlexDiv> 
                </FlexDiv>
            </FlexDiv>
            <FlexDiv className="content-body"  flexWrap="wrap" Height="100%"  flexGrow="1"  borderRadius="3em" overflowY="scroll">
                <FlexDiv className="main-body"  padding="2em" Height="100%"  Width="70%" minWidth="300px" overflowY="scroll">
                    {renderPage()}
                </FlexDiv>
                <FlexDiv className="side-bar"  Width="30%" Height="100%" minWidth="208px" padding="2em">right bar</FlexDiv>
            </FlexDiv>
        </FlexDiv>
    )
}

export default FrontPage;