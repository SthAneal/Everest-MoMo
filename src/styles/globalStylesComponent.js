import styled, {css} from 'styled-components';

const Black_Coffee = '#322C2C';
const Ruby_Red =  '#A01D28';
const White = '#FFFFFF';
const Cultured = '#F7F7F7';
const Space_cadet = '#29335C';

// different media query cases. Allows at least 3 media query per element. 
// Increase the array 'media' for more cases.
const medias = ["mediaA","mediaB","mediaC"];

// to create shadow div
const ShadowDiv = (props)=><div className={props.className}>
    {props.children}
</div>

/* const complexMixin = css`
    @media screen and (${(props,elem)=>`${props[elem].screenWidthProp}:${props[elem].value}`}){
        ${(props,elem)=>props[elem].property}
    }
` */
var newStyle;

const FlexDiv = styled.div`
    position: ${props=>props.position || "inherit"};
    inset: ${props=>props.inset || "inherit"};
    flex-direction:${props=>props.direction || "row"};
    display:flex;
    flex: ${props=>props.flexCount || "inherit"};
    flex-wrap: ${props=>props.flexWrap || 'nowrap'};
    flex-grow: ${props=>props.flexGrow || 'inherit'};
    height:${props=>props.Height || "auto"};
    width: ${props=>props.Width || "auto"};
    min-height:${props=>props.minHeight || "auto"};
    min-width: ${props=>props.minWidth || "auto"};
    max-height:${props=>props.maxHeight || "inherit"};
    max-width: ${props=>props.maxWidth || "inherit"};
    justify-content: ${props=>props.justifyContent || "flex-start"};
    align-items: ${props=>props.alignItem || "flex-start"};
    padding:${props=>props.padding || "0 0 0 0"};
    margin:${props=>props.margin || "0 0 0 0"};
    border-radius:${props=>props.borderRadius || "0 0 0 0 "};
    overflow-x:${props=>props.overflowX || "hidden"};
    overflow-y:${props=>props.overflowY || "hidden"};
    

    ${props=> {
        newStyle ='';
        medias.forEach((elem)=>{
                    if(props[elem]){
                        const attribute = props[elem].screenWidthProp;
                        const property = props[elem].property;
                        newStyle += "@media screen and ("+attribute+"){"+
                                property+
                            "};"
                    }
                 });
                 newStyle = css`${newStyle}`;
            }
     }
     ${()=>newStyle}
`
const FlexChild = styled.div`
    flex: ${props=>props.flexCount || "auto"};
    width: ${props=>props.Width || "auto"};
    height:${props=>props.Height || "auto"};
    padding:${props=>props.padding || "0 0 0 0"};
    align-self: ${props=>props.alignSelf || "auto"};
`
const Title = styled.h2`
    width:${props=>props.Width || "100%"};
    height:${props=>props.Height || "auto"};
    font-size:${props=>props.fontSize || "1.5em"};
    font-weight:${props=>props.fontWeight || "bold"};
    text-align:${props=>props.textAlign || "center"};
    padding:${props=>props.padding || "0"};
    margin:${props=>props.margin || "0"};
    color:${props=>props.color || Space_cadet};
    text-transform:${props=>props.textTransform || "initial"};
    line-height:${props=>props.lineHeight || "1.2em"};
    word-spacing:0.3em;
`

const ImageHolder = styled(ShadowDiv)`
     width:${props=>props.Width || "100%"};
     height:${props=>props.Height || "100%"};
     background-image:url('${props=>props.image || "" }');
     background-position: ${props=>props.bgPosition || "center"};
     background-repeat: ${props=>props.repeat || "no-repeat"};
     background-size: ${props=>props.bgSize || "cover"};
     border-radius:${props=>props.borderRadius || "0"};
`

export {FlexDiv, FlexChild, Title, ImageHolder}
