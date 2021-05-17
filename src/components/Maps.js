//import React from 'react';
import {FlexDiv} from '../styles/globalStylesComponent';

const Maps = ({data})=>{
    return(
        <FlexDiv className="map" Width="100%" direction="column" margin="0.7em 0.7em 5em" alignItem="center">
            <iframe width="100%" height="300" style={{border:0}} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/view?zoom=18&center=-37.7909%2C144.8631&key=AIzaSyDrqBkEXwv3Vjag0jT1iWT3xD0RivN00nU"></iframe>
        </FlexDiv>
    )
}

export default Maps;