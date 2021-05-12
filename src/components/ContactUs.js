import React from 'react';
import {FlexDiv, Title} from '../styles/globalStylesComponent';


const ContactUs = ({data})=>{
    const currentTime = new Date().getHours(); 
    
    return(
        <FlexDiv className="contact" Width="100%" direction="column" padding="2em" margin="0.7em" alignItem="center">
            <Title fontWeight="500" margin="0 0 1.5em" fontSize="2em" >{data.company}</Title>
            {data.note?<div className="note">{data.note}</div>:null}
            
            <div className="status">
                {
                    (currentTime >= data.openHour && currentTime < data.closeHour && data.status === "open")? 'Open':'Closed'
                }
            </div>
            <div className="address">{data.address}</div>
            <div className="opening"><span>{data.openHour} - {data.closeHour}</span> / <span> {data.days}</span></div>
            <div className="phone">{data.phone}</div>
        </FlexDiv>
    )
}

export default ContactUs;