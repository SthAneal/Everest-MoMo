import React, {useState, useEffect, useContext}from 'react';
import ReactDOM from 'react-dom';
import {Context as PostContext} from  '../context/PostContext';
import {FlexDiv, ImageHolder, Title, ModalWrapper} from '../styles/globalStylesComponent';
import Card from '../components/Card';

import MenuList from '../components/MenuList';
import { ReactComponent as SearchIcon} from '../assets/magnifying-glass.svg';
import { ReactComponent as CloseIcon} from '../assets/close.svg';

import imagePlaceholder from '../assets/chicken.png'



const Menu = ()=>{
    let menuList = null; // ===> to hold all the menu and sub menu items
    let menuItems = []; // ===> to provide the search scope for menu search field
    const [itemDetails, setItemDetails] = useState(null); // ===> hold the sub menu items details for tooltip modal
    const {state, getMenu} = useContext(PostContext);

    useEffect(()=>{
        if(!state.menu)
            getMenu();
    },[]);

    // get the menu items available for search function
    if(state.menu){
        state.menu.map(({items})=>{
            menuItems.push(...items);
        });
    };

    // to show detail of the menu item on hover inside a popup
    const showItemDetail = (e, item)=>{
        const listTopOffset = e.target.offsetTop;
        const listLeftOffset = e.target.offsetLeft;
        const listWidth = e.target.offsetWidth;
        const data = {
            name:item.name,
            headerImage:{
                image:item.image,
                altTxt:item.name
            },
            subContent:item.price,
            content:item.subContent
        }

        setItemDetails(data);
        Object.assign(document.querySelector('.item-details').style,{display:"flex", alignItem:"center", top:listTopOffset - 310+'px', left:listLeftOffset+10+'px', width:listWidth-20+'px'});
    }

    // to hide detail of the popup
    const hideItemDetail = ()=>{
        Object.assign(document.querySelector('.item-details').style,{display:"none", top:0, left:0, width:"auto"});
        setItemDetails(null);
    }

    // to show the search result div while searching
    const showSearchResult = ()=>{
        Object.assign(document.querySelector('.search-result').style,{display:"flex", top:70+'px', left:0+'px', width:"100%"});
    }

    // to hide detail of the search result popup
    const hideSearchResult = ()=>{
        Object.assign(document.querySelector('.search-result').style,{display:"none", top:0, left:0, width:"auto"});
        document.querySelector('.search__input').value = '';
        
        // clear the search result
        let SearchResultList = '';
        ReactDOM.render(SearchResultList, document.getElementById('search-result__items'));
    }
    
    // to search the matching items from menu items
    const findMatchingItems = (e)=>{
        let searchItem = e.target.value;
        let SearchResultList = '';

        // get the filtered search result
        let searchResult = menuItems.filter((item)=>{
            return item.name.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1 && searchItem !==''? item:null;
        });

        // check if the search result criterion are valid, if not display appropiate message
        if(searchResult.length >0){
            SearchResultList = searchResult.map(element => {
                return  (
                    <FlexDiv Width="100%" maxHeight="350px" padding="0 0 2em" direction="row" alignItem="center" key={element._id} className="search-result__items__list" flexWrap="wrap" flexGrow="1">
                        <FlexDiv Width="100px" maxHeight="100px" margin="0 1em 1em 0" className="search-result__items__image-wrapper" borderRadius="1em">
                            <img 
                                src={element.image?`data:image/jpeg;base64,${element.image}`:`${imagePlaceholder}`} 
                                alt={element.altTxt} 
                            />
                        </FlexDiv>
                        <FlexDiv Width="80%" direction="column">
                            <FlexDiv Width="100%" direction="row" flexWrap="wrap" flexGrow="1">
                                <FlexDiv margin="0 1em 1em 0"><Title fontSize="1.5em" textAlign="left" color="#fff">{element.name}</Title></FlexDiv>
                                <FlexDiv minWidth="100px" margin="0 0 1em 0"><Title textAlign="right" fontSize="1.5" color="#ffffffc7">{element.price}</Title></FlexDiv>
                            </FlexDiv>
                            <FlexDiv Width="100%">
                                <Title fontSize="1em" fontWeight="400" textAlign="left" color="#ffffffc7">{element.subContent}</Title>
                            </FlexDiv>
                        </FlexDiv>
                    </FlexDiv>);
            });
        }else if(searchResult.length === 0 && searchItem.length !== 0){
            SearchResultList =  <FlexDiv Width="100%" Height="100%" justifyContent="center" alignItem="center">
                                    <Title color="#fff" fontSize="2em">No Result Found !!!</Title>
                                </FlexDiv>;
        }else{
            SearchResultList =  <FlexDiv Width="100%" Height="100%" justifyContent="center" alignItem="center">
                                    <Title color="#fff" fontSize="2em">Try searching for your favourite.</Title>
                                </FlexDiv>;
        }

        // render the search items into the result section
        ReactDOM.render(SearchResultList, document.getElementById('search-result__items'));

    }

    // if menu exits in state then create menu list
    if(state.menu){
        menuList = state.menu.map((data)=>{
            return <MenuList key={data.aliasName} data={data} showItemDetail={showItemDetail} hideItemDetail={hideItemDetail}/>
        });
    }

    return(
        <FlexDiv direction="column" padding="1.5em 1em 0" position="relative">
            <ModalWrapper className="item-details"  minHeight="300px" borderRadius="1em" padding="0">
                <span className="modal-wrapper-close" onClick={()=>hideItemDetail()}><CloseIcon/></span>
                {itemDetails && <Card data={itemDetails} Width="100%" Height="100%"/>}
            </ModalWrapper>
            <Title Width="100%" fontWeight="600" fontSize="1.7em" textTransform="uppercase" color="#29335C">Our Menu</Title>
            <FlexDiv Width="80%" alignSelf="center" margin="5em 0" padding="0.5em 1em" borderRadius="1em" className="search" justifyContent="space-between" overflowY="visible" overflowX="visible" position="relative">
                <input className="search__input" type="text" placeholder="Search your favourite food..."  onChange={(e)=>findMatchingItems(e)} onClick={()=>showSearchResult()}/>
                <div className="search__btn">
                    <SearchIcon/>
                </div>
                <ModalWrapper className="search-result" Width="100%" top="0" left="0" padding="5em 1em 5em" borderRadius="1em" backgroundColor="#514c4ef2">
                    <span className="modal-wrapper-close" onClick={()=>hideSearchResult()}><CloseIcon/></span>
                    <FlexDiv Width="100%" Height="350px" overflowY="scroll">
                        <FlexDiv Width="100%" maxHeight="1000vh" minHeight="100%" direction="column" padding="0 0 2em" className="search-result__items" id="search-result__items">

                        </FlexDiv>
                    </FlexDiv>
                </ModalWrapper>
            </FlexDiv>
            <FlexDiv Width="100%" flexWrap="wrap" flexGrow="1">
                {menuList}
            </FlexDiv>
        </FlexDiv>
    )
}

export default Menu;