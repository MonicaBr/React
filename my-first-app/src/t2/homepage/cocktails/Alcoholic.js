import React from 'react';
import axios from 'axios';
import List from '../list/List';

class Alcoholic extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            alcoholicCocktails: []
        }
    }

    componentDidMount() {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
            .then(r => this.setState({alcoholicCocktails: r.data.drinks}));
    }

    render() {
        return (
            <div>
                <h3>Alcoholic cocktails</h3>
                <List cocktails={this.state.alcoholicCocktails} cocktailType="alcoholic"></List> 
            </div>
        )
    }
}

export default Alcoholic;