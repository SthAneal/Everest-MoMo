//import React from 'react';
import {FlexDiv, Title} from '../styles/globalStylesComponent';
import imagePlaceholder from '../assets/man.png';

const Testimonials = ({data, Width, OddOrEven})=>{
    return(
        <FlexDiv className="testimonial" minWidth="120px"  Width={Width} flexWrap="wrap" flexGrow="1" alignItem="center">
            <FlexDiv className="testimonial__image" Width="22%" minWidth="100px" maxHeight="100px" justifyContent="center" alignItem="center" padding="1em" overflowX="visible" overflowY="visible">
                <img 
                    src={data.image?`data:image/jpeg;base64,${data.image}`:`${imagePlaceholder}`} 
                    alt={data.altTxt} 
                />
            </FlexDiv>
            <FlexDiv className="testimonial__comment" direction="column" alignItem="flex-start" Width="70%" Height="100%" padding="1em">
                <Title fontWeight="500" margin="0 0 0.4em" fontSize="1.2em" textAlign="left">{data.name}</Title>
                <div className="description">{data.testimony}</div>
            </FlexDiv>
        </FlexDiv>
    )
}

export default Testimonials;