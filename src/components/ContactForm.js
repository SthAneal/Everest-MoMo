import React, {useState} from 'react';

import {FlexDiv, Title} from '../styles/globalStylesComponent';
import validation from '../components/validation';

const ContactForm = ()=>{
    const [formMessage, setFormMessage] = useState(null);
    const [isValid, setValidation] = useState(false);

    const inputHandle = (e)=>{
        const label = e.target.previousElementSibling;
        //label.classList.add('stick');
        //checks if the field is empty when clicked or mouse leave and assigns or remove class 'stick'
        if(e.target.value !==''){
            label.classList.add('stick');
        }else{
            label.classList.remove('stick');
        }
        //validation(e);
    }

    const sumbitForm = (e)=>{
        const validationElement = document.getElementsByClassName('validate');
        let count = 0;

        for(let i=0; i < validationElement.length; i++){
            if(!validationElement[i].value){
                count += 1;
                validationElement[i].classList.remove('validation-passed');
                validationElement[i].classList.add('validation-failed');
            }else{
                validationElement[i].classList.remove('validation-failed');
                validationElement[i].classList.add('validation-passed');
            }
        }
        
        if(count > 0){
            setFormMessage('Please fill the mandatory fields.');
            setValidation(false);
        }else{
            setFormMessage('Thankyou!!! We have received your message. We will contact you soon.');
            setValidation(true);
        }
    }

    return(
        <FlexDiv Width="100%" direction="column" borderRadius="1em" className="contact-form shadow" padding="3em 1em">
            {formMessage && <FlexDiv margin="0 0 2.5em 0" className={isValid?"validation-success":"validation-fail"} Width="100%" justifyContent="center">{formMessage}</FlexDiv>}
            <FlexDiv Width="100%" direction="column" className="contact-form__label-input" position="relative" padding="2em 1em">
                <label>Name</label>
                <input className="validate" type="text" onMouseLeave={(e)=>inputHandle(e)} required/>
            </FlexDiv>
            <FlexDiv Width="100%" direction="row" flexGrow="1" flexWrap="wrap">
                <FlexDiv Width="50%" minWidth="300px" direction="column"  className="contact-form__label-input" position="relative"  padding="2em 1em">
                    <label>Email</label>
                    <input className="validate" type="email"  onMouseLeave={(e)=>inputHandle(e)} required/>
                </FlexDiv>
                <FlexDiv Width="50%" minWidth="300px" direction="column"  className="contact-form__label-input" position="relative"  padding="2em 1em">
                    <label>Phone no.</label>
                    <input className="validate" type="number" onMouseLeave={(e)=>inputHandle(e)} required/>
                </FlexDiv>
            </FlexDiv>
            <FlexDiv Width="100%" direction="column"  className="contact-form__label-input" position="relative"  padding="2em 1em">
                <label>Message</label>
                <textarea className="validate" rows="1" onMouseLeave={(e)=>inputHandle(e)} required></textarea>
            </FlexDiv>
            <FlexDiv Width="100%" justifyContent="center" margin="2em 0 0" padding="2em">
                <button type="submit" className="submitBtn" onClick={(e)=>sumbitForm(e)}>Submit</button>
            </FlexDiv>
        </FlexDiv>
    )
}

export default ContactForm;
