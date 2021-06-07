import React,{useContext} from 'react';

import {FlexDiv, ImageHolder, Title} from '../styles/globalStylesComponent';
import {Context as PostContext} from '../context/PostContext';
import Loading from '../components/Loading';
import ContactForm from '../components/ContactForm';


const Contact = ()=>{
    const {state} = useContext(PostContext);

    return(
        (()=>{
            if(state.contact){
                return(
                    <FlexDiv direction="column" padding="1.5em 0 0">
                        <FlexDiv Width="100%" padding="0 1em 1em">
                            <ImageHolder Height="400px" Width="100%" className="shadow" borderRadius="1em">
                                <img src={`data:image/jpeg;base64,${state.contact.image}`} alt={`${state.contact.company}`}/>
                            </ImageHolder>
                        </FlexDiv>
                        <FlexDiv Width="100%" margin="5em 0 0" padding="1em" direction="column">
                            <Title Width="100%" fontWeight="600" fontSize="1.7em" textTransform="uppercase" color="#29335C">Keep in touch with us</Title>
                            <FlexDiv Width="100%" margin="2em 0 5em" padding="1em" textAlign="Center" direction="column">
                                <ContactForm/>
                            </FlexDiv>
                        </FlexDiv>
                    </FlexDiv>
                )
            }else{
                return <Loading minHeight="100%"/>
            }
        })()
    )
}

export default Contact;