import React from 'react';
import { Link } from 'react-router-dom';

import './ListItem.css';

const ListItem = ({cocktail, backUrl}) =>
    <div className="list-item">
        <img src={cocktail.strDrinkThumb} height="100" width="100" alt={cocktail.strDrink}/>
        <p><Link to={{ 
            pathname: `/cocktails/${cocktail.idDrink}`,
            state: {
                cocktail: cocktail,
                backUrl: backUrl
            }
            }}>{cocktail.strDrink}</Link></p>
    </div> 

export default ListItem;