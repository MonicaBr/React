import React from 'react';
import { Link } from 'react-router-dom';

import ListItemDetailHoc from '../hocs/ListItemDetailHoc';

class CocktailDetails extends React.Component {
    render() {
        const cocktail = this.props.location.state.cocktail;
        const backUrl = this.props.location.state.backUrl;

        if(cocktail != null) {
            return (
                <div>
                    <h3>{cocktail.strDrink}</h3>
                    <img src={cocktail.strDrinkThumb} height="500" width="500"/>
                    <Link to={backUrl}><button>Back</button></Link>
                </div>
            )
        }
        else {
            return (<div></div>);
        }
    }
}

CocktailDetails = ListItemDetailHoc(CocktailDetails);

export default CocktailDetails;