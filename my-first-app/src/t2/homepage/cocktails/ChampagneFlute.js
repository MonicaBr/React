import React from 'react';
import axios from 'axios';
import List from '../list/List';

class ChampagneFlute extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            cocktailChampagneFlutes: []
        }
    }

    componentDidMount() {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute")
            .then(r => this.setState({cocktailChampagneFlutes: r.data.drinks}));
    }

    render() {
        return (
            <div>
                <h3>Champagne flutes</h3> 
                <List cocktails={this.state.cocktailChampagneFlutes} cocktailType="champagne-flute"></List>
            </div>
        )
    }
}

export default ChampagneFlute;