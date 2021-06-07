import React,{useEffect, useContext} from 'react';
import {FlexDiv, ImageHolder, Title} from '../styles/globalStylesComponent';
import {Context as PostContext} from '../context/PostContext';

import Loading from '../components/Loading';
import Amenities from '../components/Amenities';

const About = ()=>{
    const {state, getChildrensByParentAliasName} = useContext(PostContext);

    let amenities = null;

    useEffect(()=>{
        if(!state.aboutus)
            getChildrensByParentAliasName('aboutus');

        if(!state.amenities)
            getChildrensByParentAliasName('amenities');
    },[]);

    if(state.amenities){
        amenities = state.amenities.childrens.map((child)=>{
            return(
                <Amenities 
                    key={child.aliasName}
                    data={child}
                    Width={`${100/3}%`}
                    OddOrEven={state.menu.indexOf(child)}
                />
            )
        })
    }

   

    return(
        (()=>{
            if(state.aboutus){
                return (
                    <FlexDiv direction="column" padding="1.5em 0 0">
                        <FlexDiv Width="100%" padding="0 1em 1em">
                            <ImageHolder Height="400px" Width="100%" className="shadow" borderRadius="1em">
                                <img src={`data:image/jpeg;base64,${state.aboutus.headerImage.image}`} alt={`${state.aboutus.headerImage.altTxt}`}/>
                            </ImageHolder>
                        </FlexDiv>
                        <FlexDiv Width="100%" margin="5em 0 0" padding="1em" direction="column">
                            <Title Width="100%" fontWeight="600" fontSize="1.7em" textTransform="uppercase" color="#29335C">About Us</Title>
                            <FlexDiv Width="100%" margin="2em 0 5em" textAlign="Center" direction="column">
                                <Title Width="100%" fontWeight="500" fontSize="1.2em" fontStyle="italic" margin="0 0 1.5em" >
                                    "{state.aboutus.subContent}"
                                </Title>
                                <FlexDiv textAlign="center">{state.aboutus.content}</FlexDiv>
                            </FlexDiv>
                        </FlexDiv>
                        <FlexDiv Width="100%" margin="5em 0 0" direction="row" flexWrap="wrap" flexGrow="1" justifyContent="space-around">
                            <FlexDiv Width="300px" padding="1em" justifyContent="center">
                                <ImageHolder Height="400px" Width="300px" className="shadow" borderRadius="1em">
                                    <img src={`data:image/jpeg;base64,${state.aboutus.childrens[0].headerImage.image}`} alt={`${state.aboutus.childrens[0].headerImage.altTxt}`}/>
                                </ImageHolder>
                            </FlexDiv>
                            <FlexDiv direction="column" Width="300px"  padding="1em">
                                <Title Width="100%" fontWeight="600" fontSize="1.7em" margin="0 0 1.5em" textAlign="center">{state.aboutus.childrens[0].subContent}</Title>
                                <FlexDiv textAlign="left">{state.aboutus.childrens[0].content}</FlexDiv>
                            </FlexDiv>
                        </FlexDiv>
                        <FlexDiv Width="100%" Height="100%"  margin="5em 0 0" direction="column">
                            <Title Width="100%" fontWeight="600" fontSize="1.7em" textTransform="uppercase" color="#29335C">Amenities</Title>
                            <FlexDiv Width="100%" Height="100%" margin="2em 0 0" padding="1em" justifyContent="center" flexWrap="wrap" flexGrow="1">{amenities}</FlexDiv>
                        </FlexDiv>
                    </FlexDiv>
                )
            }else{
                return <Loading minHeight="100%"/>
            }
        })()
    )
}

export default About;