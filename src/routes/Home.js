import {FlexDiv, FlexChild} from '../styles/globalStylesComponent';
import Slider from '../components/slider';

const Home = ()=>{
    return(
        <FlexDiv direction="column">
            <FlexDiv Width="100%" Height="400px">
                <Slider/>
            </FlexDiv>

            <FlexDiv Width="100%">
                this is rest of container
            </FlexDiv>
        </FlexDiv>
    )
}

export default Home;