import React from 'react';
import { Link } from 'react-router-dom';

import './List.css';
import ListItem from '../ListItem';

export default function List(props) {
    if(props.cocktails == null) {
        return (
            <div></div>
        )
    }

    return (
        <div className="list-container">
            {/* <CocktailToggleDetails 
                hidden={!this.state.showToggleDetails} 
                cocktail={this.state.currentCocktailSelected} 
                onHideDetailsClick={this.onHideDetailsClick}/> */}

            <Link to={{ 
                pathname: "/add-cocktail",
                state: {
                    backUrl: `/${props.cocktailType}`
                }
            }}><button>Add cocktail</button></Link>

            {props.cocktails.map(c => 
                <ListItem cocktail={c} 
                    backUrl={"/" + props.cocktailType} 
                    key={c.idDrink} />
            )}
        </div>
    )
}
