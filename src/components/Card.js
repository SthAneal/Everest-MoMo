//import React from 'react';
import {FlexDiv, Title} from '../styles/globalStylesComponent';
import imagePlaceholder from '../assets/chicken.png'


const Card = ({data, Width, OddOrEven})=>{
    return(
        <FlexDiv className="card" direction="column" alignItem="center" minWidth="200px"  Width={Width}>
            <div>
                <img 
                    src={data.headerImage.image?`data:image/jpeg;base64,${data.headerImage.image}`:`${imagePlaceholder}`} 
                    alt={data.headerImage.altTxt} 
                />
                <Title fontWeight="500" margin="0 0 1em" fontSize="1.5em" lineHeight="1.2em">{data.name}</Title>
                <div className="price">{data.subContent}</div>
                <div className="description">{data.content}</div>
            </div>
        </FlexDiv>
    )
}

export default Card;