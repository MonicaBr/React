import React from 'react';

const ListItemDetails = ({cocktail, onBackClick, hidden}) => {
    if(cocktail != null) {
        return(
            <div hidden={hidden}>
                <h3>{cocktail.strDrink}</h3>
                <img src={cocktail.strDrinkThumb} height="500" width="500"/>
                <button onClick={onBackClick}>Back</button>
            </div>
        );
    }
    
    return (<div></div>);
}

export default ListItemDetails;