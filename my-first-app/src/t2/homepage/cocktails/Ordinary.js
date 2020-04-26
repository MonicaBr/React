import React from 'react';
import axios from 'axios';
import List from '../list/List';

class Ordinary extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            ordinaryCocktails: []
        }
    }

    componentDidMount() {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink")
            .then(r => this.setState({ordinaryCocktails: r.data.drinks}));
    }

    render() {
        return (
            <div>
                <h3>Ordinary drinks</h3> 
                <List cocktails={this.state.ordinaryCocktails} cocktailType="ordinary"></List> 
            </div>
        )
    }
}

export default Ordinary;