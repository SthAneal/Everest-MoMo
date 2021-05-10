import React from 'react';
import {FlexDiv, Title} from '../styles/globalStylesComponent';
import imagePlaceholder from '../assets/chicken.png'


const Card = ({data, Width, OddOrEven})=>{
    return(
        <FlexDiv className="card" direction="column" alignItem="center" minWidth="200px"  Width={Width}>
            <div style={{'background':OddOrEven % 2 === 0?'#eff3ff':'white'}}>
                <img 
                    src={data.headerImage.image?`data:image/jpeg;base64,${data.headerImage.image}`:`${imagePlaceholder}`} 
                    alt={data.headerImage.altTxt} 
                    style={{'border':'0.5em solid','borderColor':OddOrEven % 2 === 0?'#eff3ff':'white'}}
                />
                
                <Title fontWeight="400" margin="0 0 1em">{data.name}</Title>
                <div className="price">{data.subContent}</div>
                <div className="description">{data.content}</div>
            </div>
        </FlexDiv>
    )
}

export default Card;