import styled from 'styled-components';

const Black_Coffee = '#322C2C';
const Ruby_Red =  '#A01D28';
const White = '#FFFFFF';
const Cultured = '#F7F7F7';
const Space_cadet = '#29335C';

const FlexDiv = styled.div`
    flex-direction:${props=>props.direction || "row"};
    display:flex;
    flex: ${props=>props.flexCount || "inherit"};
    flex-wrap: ${props=>props.flexWrap || 'nowrap'};
    flex-grow: ${props=>props.flexGrow || 'inherit'};
    height:${props=>props.Height || "auto"};
    width: ${props=>props.Width || "auto"};
    min-height:${props=>props.minHeight || "inherit"};
    min-width: ${props=>props.minWidth || "inherit"};
    max-height:${props=>props.maxHeight || "inherit"};
    max-width: ${props=>props.maxWidth || "inherit"};
    justify-content: ${props=>props.justifyContent || "flex-start"};
    align-items: ${props=>props.alignItem || "flex-start"};
    padding:${props=>props.padding || "0 0 0 0"};
    border-radius:${props=>props.borderRadius || "0 0 0 0 "};
    overflow-x:${props=>props.overflowX || "hidden"};
    overflow-y:${props=>props.overflowY || "hidden"};

`
const FlexChild = styled.div`
    flex: ${props=>props.flexCount || "auto"};
    width: ${props=>props.Width || "auto"};
    height:${props=>props.Height || "auto"};
    padding:${props=>props.padding || "0 0 0 0"};
    align-self: ${props=>props.alignSelf || "auto"};
`


export {FlexDiv, FlexChild}