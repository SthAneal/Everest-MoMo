import {FlexDiv, Title, ImageHolder} from '../styles/globalStylesComponent';

const Amenities  = ({data,Height, Width, OddOrEven})=>{
    return(
        (()=>{
            return (
                <FlexDiv className="amenities shadow" Height={Height} Width={Width} minWidth="200px" maxWidth="505px"  margin="1em" direction="column"  alignItem="center"  borderRadius="1em"
                    mediaA={
                        {
                            screenWidthProp:"max-width:450px",
                            property:"margin:1em 0px;"
                        }
                    }
                >
                    <FlexDiv className="amenities__header" Width="100%" Height="200px" padding="2em 1em" direction="column">
                        <FlexDiv Width="100%" alignItem="center">
                            <Title Width="100%" fontWeight="500" fontSize="1.5em" color="#29335C" textAlign="center" textTransform="uppercase">{data.name}</Title>
                        </FlexDiv>
                        <FlexDiv className="amenities__subContent" Width="100%" justifyContent="center" alignItem="center" textAlign="center">
                            {data.subContent}
                        </FlexDiv>
                    </FlexDiv>
                    <FlexDiv Width="100%" Height="300px" justifyContent="stretch">
                        <ImageHolder>
                            <img className="amenities__image" src={`data:image/jpeg;base64,${data.headerImage.image}`} alt={`${data.headerImage.altTxt}`}/>
                        </ImageHolder>
                    </FlexDiv>
                </FlexDiv>
            )
        })()
    )
}

export default Amenities;