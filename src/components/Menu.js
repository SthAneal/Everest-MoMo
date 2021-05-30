//import React from 'react';
import {FlexDiv, Title} from "../styles/globalStylesComponent" ;

import imagePlaceholder from '../assets/chicken.png'

const Menu = ({onClick, data, Width, Height, OddOrEven})=>{
    return(
        <FlexDiv className="menu" direction="column" alignItem="center" minWidth="200px"  Width={Width} Height={Height}>
            <div onClick={onClick}>
                <Title className="menu__title" fontWeight="500" padding="2em 0.5em"  fontSize="1.5em" lineHeight="1.2em">{data.name}</Title>
                <img 
                    src={data.image?`data:image/jpeg;base64,${data.image}`:`${imagePlaceholder}`} 
                    alt={data.name} 
                />
            </div>
        </FlexDiv>
    )
}

export default Menu;