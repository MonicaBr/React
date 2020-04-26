import React from 'react';

import './List.css';
import ListItem from '../ListItem';

class List extends React.Component {

    render() {
        if(this.props.cocktails == null) {
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

                {this.props.cocktails.map(c => 
                    <ListItem cocktail={c} 
                        backUrl={"/" + this.props.cocktailType} 
                        key={c.idDrink} />
                )}
            </div>
        )
    }
}

export default List;

