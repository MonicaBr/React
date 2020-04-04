import React from 'react';
import './ListItem.css';

const ListItem = ({cocktail, onImageClick, onTitleClick}) =>
    <div className="list-item">
        <img src={cocktail.strDrinkThumb} height="100" width="100" alt={cocktail.strDrink} onClick={onImageClick}/>
        <p onClick={onTitleClick}>{cocktail.strDrink}</p>
    </div> 

export default ListItem;