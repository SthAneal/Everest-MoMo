import React from 'react';

import {FlexDiv, Title} from '../styles/globalStylesComponent';

const ContactForm = ()=>{

    const inputHandle = (e)=>{
        const label = e.target.previousElementSibling;
        //label.classList.add('stick');
        //checks if the field is empty when clicked or mouse leave and assigns or remove class 'stick'
        if(e.target.value !==''){
            label.classList.add('stick');
        }else{
            label.classList.remove('stick');
        }
    }
    return(
        <FlexDiv Width="100%" direction="column" borderRadius="1em" className="contact-form shadow" padding="3em 1em">
            <FlexDiv Width="100%" direction="column" className="contact-form__label-input" position="relative" padding="2em 1em">
                <label>Name</label>
                <input type="text" onMouseLeave={(e)=>inputHandle(e)}/>
            </FlexDiv>
            <FlexDiv Width="100%" direction="row" flexGrow="1" flexWrap="wrap">
                <FlexDiv Width="50%" direction="column"  className="contact-form__label-input" position="relative"  padding="2em 1em">
                    <label>Email</label>
                    <input type="email"  onMouseLeave={(e)=>inputHandle(e)}/>
                </FlexDiv>
                <FlexDiv Width="50%" direction="column"  className="contact-form__label-input" position="relative"  padding="2em 1em">
                    <label>Phone no.</label>
                    <input type="number" onMouseLeave={(e)=>inputHandle(e)}/>
                </FlexDiv>
            </FlexDiv>
            <FlexDiv Width="100%" direction="column"  className="contact-form__label-input" position="relative"  padding="2em 1em">
                <label>Message</label>
                <textarea rows="3" onMouseLeave={(e)=>inputHandle(e)}></textarea>
            </FlexDiv>
            <FlexDiv Width="100%" justifyContent="center" margin="2em 0 0" padding="2em">
                <button type="submit" className="submitBtn">Submit</button>
            </FlexDiv>
        </FlexDiv>
    )
}

export default ContactForm;