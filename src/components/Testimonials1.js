import React from 'react';
import {FlexDiv, Title} from '../styles/globalStylesComponent';
import imagePlaceholder from '../assets/man.png'


const Testimonials = ({data, Width, OddOrEven})=>{
    return(
        <FlexDiv className="testimonial" direction="column" alignItem="center"  minWidth="200px"  Width={Width}>
            <div>
                <img 
                    src={data.image?`data:image/jpeg;base64,${data.image}`:`${imagePlaceholder}`} 
                    alt={data.altTxt} 
                    style={{'border':'0.5em solid','borderColor':OddOrEven % 2 === 0?'#eff3ff':'white'}}
                />
                
                <Title fontWeight="600" margin="0 0 1em" fontSize="1.3em">{data.name}</Title>
                <div className="description">{data.testimony}</div>
            </div>
        </FlexDiv>
    )
}

export default Testimonials;