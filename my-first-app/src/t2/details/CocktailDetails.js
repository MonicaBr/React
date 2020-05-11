import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./CocktailDetails.css";

/// try to call API again with the id from url
export default function CocktailDetails(props) {
    const cocktail = props.location.state.cocktail;
    const backUrl = props.location.state.backUrl;

    useEffect(
        () => {
            // call api to get cocktail
        }
    )

    if(cocktail != null) {
        return (
            <div className="details-container">
                <div className="cocktail-container">
                    <h3>{cocktail.strDrink}</h3>
                    <img src={cocktail.strDrinkThumb} height="500" width="500" alt="cocktail-img" />
                    <Link to={backUrl}><button>Back</button></Link>
                </div>
            </div>
        )
    }
    else {
        return (<div></div>);
    }
}