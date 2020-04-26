import React from 'react';
import { Link } from 'react-router-dom';

class CocktailMenu extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/alcoholic">Alcoholic</Link></li>
                    <li><Link to="/non-alcoholic">Non Alcoholic</Link></li>
                    <li><Link to="/ordinary">Ordinary Drink</Link></li>
                    <li><Link to="/glasses">Cocktail glass</Link></li>
                    <li><Link to="/champagne-flute">Champagne flute</Link></li>
                </ul>
            </nav>
        );
    }
}

export default CocktailMenu;