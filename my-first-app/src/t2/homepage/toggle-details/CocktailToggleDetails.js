import React from 'react';
import './CocktailToggleDetails.css';

class CocktailToggleDetails extends React.Component {
    render() {
        if(this.props.cocktail != null) {
            return (
                <div hidden={this.props.hidden}>
                    <button onClick={this.props.onHideDetailsClick}>HideDetails</button>
                    <div className="toggled-details-container">
                        <img className="toggled-details-img" src={this.props.cocktail.strDrinkThumb} height="300" width="300"/>
                        <div className="cocktail-details">
                            <h4>{this.props.cocktail.strDrink}</h4>
                            <h4>{this.props.cocktail.idDrink}</h4>            
                        </div>
                    </div>
                </div>
            );
        }
    
        return (<div></div>);
    }
}

export default CocktailToggleDetails;