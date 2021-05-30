import {FlexDiv} from '../styles/globalStylesComponent';

const Loading = ({minHeight})=>{
    return(
        <FlexDiv className="loading"  minHeight={minHeight || "300px"} position="relative" borderRadius="1em">
           <FlexDiv Width="100%" Height="100%" position="absolute" inset="0" alignItem="center" justifyContent="center">
                Loading...
           </FlexDiv>
        </FlexDiv>
    )
}

export default Loading;