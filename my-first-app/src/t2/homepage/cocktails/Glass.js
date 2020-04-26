import React from 'react';
import axios from 'axios';
import List from '../list/List';

class Glass extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            cocktailGlasses: []
        }
    }

    componentDidMount() {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass")
            .then(r => this.setState({cocktailGlasses: r.data.drinks}));
    }

    render() {
        return (
            <div>
                <h3>Cocktails glasses</h3> 
                <List cocktails={this.state.cocktailGlasses} cocktailType="glasses"></List> 
            </div>
        )
    }
}

export default Glass;