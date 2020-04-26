import React from 'react';
import axios from 'axios';
import List from '../list/List';

class NonAlcoholic extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            nonAlcoholicCocktails: []
        }
    }

    componentDidMount() {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
            .then(r => this.setState({nonAlcoholicCocktails: r.data.drinks}));
    }

    render() {
        return (
            <div>
                <h3>Non-alcoholic cocktails</h3> 
                <List cocktails={this.state.nonAlcoholicCocktails} cocktailType="non-alcoholic"></List> 
            </div>
        )
    }
}

export default NonAlcoholic;