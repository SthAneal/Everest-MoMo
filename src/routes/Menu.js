import React, {useState, useEffect, useContext}from 'react';
import {Context as PostContext} from  '../context/PostContext';
import {FlexDiv, ImageHolder, Title, ModalWrapper} from '../styles/globalStylesComponent';
import Card from '../components/Card';

import MenuList from '../components/MenuList';
import { ReactComponent as SearchIcon} from '../assets/magnifying-glass.svg';
import { ReactComponent as CloseIcon} from '../assets/close.svg';


const Menu = ()=>{
    let menuList = null; // ===> to hold all the menu and sub menu items
    let menuItems = null; // ===> to provide the search scope for menu search field
    const [itemDetails, setItemDetails] = useState(null); // ===> hold the sub menu items details for tooltip modal
    const {state, getMenu} = useContext(PostContext);

    useEffect(()=>{
        if(!state.menu)
            getMenu();
    },[]);

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
        menuItems = []; // to reset the menu item at the initial state, usually when the search input is clicked
        Object.assign(document.querySelector('.search-result').style,{display:"flex", top:70+'px', left:0+'px', width:"100%"});
        state.menu.map(({items})=>{
            menuItems.push(...items);
        });
    }

    // to hide detail of the search result popup
    const hideSearchResult = ()=>{
        Object.assign(document.querySelector('.search-result').style,{display:"none", top:0, left:0, width:"auto"});
        document.querySelector('.search__input').value = '';
        //setSearchResult(null);
    }
    
    // to search the matching items from menu items
    const findMatchingItems = (e)=>{
        //document.querySelector('.search-result__item').innerHTML = '';
        let searchItem = e.target.value;
        let searchResultList = '';

        let searchResult = menuItems.filter((item)=>{
            return item.name.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1? item:null;
        });

        searchResult.forEach(element => {
            searchResultList += `<div class="search-result__items__list">${element.name}</div>`;
            document.querySelector('.search-result__items').innerHTML = searchResultList;
        });
        console.log(searchResult);

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
                <ModalWrapper className="search-result" Width="100%" Height="400px" top="0" left="0" padding="5em 1em 1em" borderRadius="1em">
                    <span className="modal-wrapper-close" onClick={()=>hideSearchResult()}><CloseIcon/></span>
                    <div className="search-result__items">

                    </div>
                </ModalWrapper>
            </FlexDiv>
            <FlexDiv Width="100%" flexWrap="wrap" flexGrow="1">
                {menuList}
            </FlexDiv>
        </FlexDiv>
    )
}

export default Menu;