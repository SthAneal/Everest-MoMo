import React from 'react';
import {FlexDiv, Title} from '../styles/globalStylesComponent';

const MenuList = ({data, showItemDetail, hideItemDetail})=>{
    const items = data.items.map((item)=>{
        return(
            <li key={item.aliasName} className="menu-list__item" onMouseEnter={(e)=>showItemDetail(e,item)} onMouseLeave={()=>hideItemDetail()}>
                <span className="menu-list__item__name">{item.name}</span>
                <span className="menu-list__item__price">{item.price}</span>
            </li>
        );
    });

    return(
        <FlexDiv minWidth="250px" Width="40%" direction="column" margin="1em" className="menu-list-wrapper"> 
            <Title margin="1em 0" fontWeight="600" fontSize="1.5em" textTransform="uppercase" color="#29335C">{data.name}</Title>
            <ul className="menu-list">
                {items}
            </ul>
        </FlexDiv>
    );
}
 
export default MenuList;