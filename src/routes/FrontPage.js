import React, {useContext} from 'react';
import {Context as PostContext} from '../context/PostContext';

import {ALink} from '../styles/globalStyles';

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
        <div>
            <ALink onClick={()=>{changeRoute('home')}}>Home page // </ALink> 
            <ALink onClick={()=>{changeRoute('about')}}>About page // </ALink> 
            <ALink onClick={()=>{changeRoute('menu')}}>Menu page // </ALink> 
            <ALink onClick={()=>{changeRoute('contact')}}>Contact page</ALink> 

            {renderPage()}
        </div>
    )
}

export default FrontPage;