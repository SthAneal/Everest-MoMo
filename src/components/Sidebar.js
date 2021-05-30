import React, {useContext, useEffect} from 'react';
import {Context as PostContext} from '../context/PostContext';

import {FlexDiv, Title} from '../styles/globalStylesComponent';

import Testimonials from './Testimonials';
import ContactUs from './ContactUs';
import Maps from './Maps';
import Socials from './Socials';

const Sidebar = ()=>{
    const {state, getTestimonials, getContact} = useContext(PostContext);
    let testimonials= null;

    useEffect(()=>{
        if(!state.testimonials)
            getTestimonials(2);
        
        if(!state.contact)
            getContact();
    },[]);


    if(state.testimonials){
        testimonials = state.testimonials.map((testimonial)=>{
            return (
                <Testimonials 
                    key={testimonial.name} 
                    data={testimonial} 
                    Width={state.testimonials.length>=2? `${100/2}%`:'100%' } 
                    OddOrEven={state.testimonials.indexOf(testimonial)}
                />
            )
        });
    }

    return(
        <FlexDiv direction="column">
            <FlexDiv  Width="100%">
                {state.contact?<ContactUs data={state.contact}/>:null}
            </FlexDiv>
            <FlexDiv  Width="100%">
                <Maps/>
            </FlexDiv>
            <FlexDiv flexWrap="wrap" flexGrow="1" alignItem="stretch" minHeight="400px" margin="0 0 4em" padding="0 0 1em">
                <Title fontWeight="400" fontSize="1.7em" margin="0 0 1.5em">Reviews</Title>
                {testimonials}
                {testimonials}
            </FlexDiv>
            <FlexDiv Width="100%" direction="column">
                <Title fontWeight="400" fontSize="1.7em" margin="0 0 1.5em">Follow us on</Title>
                <Socials/>
            </FlexDiv>
            <FlexDiv className="developed-by" Width="100%" justifyContent="center" flexWrap="wrap" flexGrow="1"> 
                <span>Designed and developed by</span> <a href="mailto:sth.anil87@gmail.com"> Anil Shrestha</a>
            </FlexDiv>
        </FlexDiv>
    )
}

export default Sidebar;