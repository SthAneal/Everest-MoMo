import React, {useContext} from 'react';
import {Context as PostContext} from '../context/PostContext';

import {FlexDiv} from '../styles/globalStylesComponent';

import Home from './Home';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';

import Sidebar from '../components/Sidebar';


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

    const handleRoute = (e) =>{
        const routeName = e.target.getAttribute("name");
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(element => {
            if(element.getAttribute("name") === routeName){
                element.classList.add("selected");
            }else{
                element.classList.remove("selected");
            }
        });
        changeRoute(routeName);
    }
    
    
    return(
        <FlexDiv className="main-background" Height="100%" padding="2em" flexWrap="wrap" flexGrow="1" overflowY="scroll">
            <FlexDiv Width="10%" minWidth="110px" margin="0 2em 0 0" className="header" 
                mediaA={
                    {
                        screenWidthProp:"max-width:955px",
                        property:"margin:0px; min-width:150px; & >.nav-bar{margin-bottom: 3em;}"
                    }
                }
                
                /* mediaB={
                    {
                        screenWidthProp:"max-width:955px",
                        property:"margin:0px;"
                    }
                } */

                >
                <FlexDiv direction="row" Width="100%" Height="100%" padding="1em 0 0 0" className="nav-bar" justifyContent="center" alignItem="center" flexWrap="wrap" flexGrow="1">
                    <FlexDiv onClick={handleRoute} name="home" justifyContent="center" margin="0 0 2em" className="logo cursor-pointer"
                        mediaA={
                            {
                                screenWidthProp:"min-width:1440px",
                                property:"margin-bottom:4em !important;"
                            }
                        }
                    >
                        <img src={logo} alt="The Everest MoMo logo"/>
                    </FlexDiv> 
                    <FlexDiv className="nav-item-wrapper" flexWrap="wrap" flexGrow="1" justifyContent="center" Width="100%"
                        mediaA={
                            {
                                screenWidthProp:"min-width:1740px",
                                property:"max-width:180px;"
                            }
                        }
                    >
                        <FlexDiv onClick={handleRoute} name="home" title="Home" direction="column" alignItem="center" margin="0.5em" maxWidth="60px" className="nav-item selected"><span><HomeIcon/></span><span>Home</span></FlexDiv> 
                        <FlexDiv onClick={handleRoute} name="about" title="About" direction="column" alignItem="center" margin="0.5em" maxWidth="60px" className="nav-item"><span><AboutusIcon/></span><span>About us</span></FlexDiv> 
                        <FlexDiv onClick={handleRoute} name="menu" title="Menu" direction="column" alignItem="center" margin="0.5em" maxWidth="60px" className="nav-item"><span><MenuIcon/></span><span>Menu</span></FlexDiv> 
                        <FlexDiv onClick={handleRoute} name="menu" title="Menu" direction="column" alignItem="center" margin="0.5em" maxWidth="60px" className="nav-item"><span><TakeawayIcon/></span><span>Take away</span></FlexDiv> 
                        <FlexDiv onClick={handleRoute} name="contact" title="Contact" direction="column" alignItem="center" margin="0.5em" maxWidth="60px" className="nav-item"><span><ContactIcon/></span><span>Contact</span></FlexDiv> 
                    </FlexDiv>
                </FlexDiv>
            </FlexDiv>
            <FlexDiv className="content-body" Width="85%" Height="100%"  flexWrap="wrap" flexGrow="1"  borderRadius="3em" overflowY="scroll">
                <FlexDiv className="main-body"  padding="2em" Height="100%"  Width="70%" minWidth="150px" overflowY="scroll">
                    {renderPage()}
                </FlexDiv>
                <FlexDiv className="side-bar"  Width="30%" Height="100%" minWidth="216px" padding="2em" overflowY="scroll">
                    <Sidebar/>
                </FlexDiv>
            </FlexDiv>
        </FlexDiv>
    )
}

export default FrontPage;