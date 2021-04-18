import styled from 'styled-components';

const Black_Coffee = '#322C2C';
const Ruby_Red =  '#A01D28';
const White = '#FFFFFF';
const Cultured = '#F7F7F7';
const Space_cadet = '#29335C';

const FlexDiv = styled.div`
    flex-direction:${props=>props.direction || "row"};
    display:flex;
    height:${props=>props.height || "auto"};
    width: ${props=>props.width || "auto"};
    justify-content: ${props=>props.justifyContent || "flex-start"};
    align-items: ${props=>props.alignItem || "flex-start"};
    padding:${props=>props.padding || "0 0 0 0"};
`
const FlexChild = styled.div`
    flex: ${props=>props.flexCount || "auto"};
    width: ${props=>props.width || "auto"};
    height:${props=>props.height || "auto"};
    padding:${props=>props.padding || "0 0 0 0"};
    align-self: ${props=>props.alignSelf || "auto"};
`


export {FlexDiv, FlexChild}
