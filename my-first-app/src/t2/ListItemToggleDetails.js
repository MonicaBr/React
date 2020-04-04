import React from 'react';
import './ListItemToggleDetails.css';

const ListItemToggleDetails = ({hidden, cocktail, onHideDetailsClick}) => {
    if(cocktail != null) {
        return (
            <div hidden={hidden}>
                <button onClick={onHideDetailsClick}>HideDetails</button>
                <div className="toggled-details-container">
                    <img className="toggled-details-img" src={cocktail.strDrinkThumb} height="300" width="300"/>
                    <div className="cocktail-details">
                        <h4>{cocktail.strDrink}</h4>
                        <h4>{cocktail.idDrink}</h4>            
                    </div>
                </div>
            </div>
        );
    }

    return (<div></div>);
}

export default ListItemToggleDetails;