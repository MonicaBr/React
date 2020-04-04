import React from 'react';
import axios from 'axios';
import './List.css';
import ListItem from './ListItem';
import ListItemDetails from './ListItemDetails';
import ListItemToggleDetails from './ListItemToggleDetails';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showList: true,
            showImage: false,
            showToggleDetails: false,
            currentCocktailSelected: null,
            alcoholicCocktails: [],
            nonAlcoholicCocktails: [],
            ordinaryCocktails: [],
            cocktailGlasses: [],
            cocktailChampagneFlutes: []
        }
    }

    componentDidMount() {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
            .then(r => this.setState({alcoholicCocktails: r.data.drinks}));

        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
            .then(r => this.setState({nonAlcoholicCocktails: r.data.drinks}));

        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink")
            .then(r => this.setState({ordinaryCocktails: r.data.drinks}));
            
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass")
            .then(r => this.setState({cocktailGlasses: r.data.drinks}));

        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute")
            .then(r => this.setState({cocktailChampagneFlutes: r.data.drinks}));

        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute")
            .then(r => this.setState({cocktailChampagneFlutes: r.data.drinks}));
    }

    onImageClick = (cocktail) => {
        this.setState({showList: false, showImage: true, currentCocktailSelected: cocktail});
    }

    onTitleClick = (cocktail) => {
        this.setState({showToggleDetails: true, currentCocktailSelected: cocktail});
    }

    onHideDetailsClick = () => {
        this.setState({showToggleDetails: false, currentCocktailSelected: null});
    }

    onBackClick = () => {
        this.setState({showList: true, showImage: false, currentCocktailSelected: null});
    }

    render() {
        return (
            <div className="list-container">
                <header className="app-header">
                    <h1>Cocktails</h1> 
                </header>
                <ListItemToggleDetails 
                    hidden={!this.state.showToggleDetails} 
                    cocktail={this.state.currentCocktailSelected} 
                    onHideDetailsClick={this.onHideDetailsClick}/>

                <div hidden={!this.state.showList}>
                    <h2>Alcoholic</h2>
                    {this.state.alcoholicCocktails.map(c => 
                        <ListItem cocktail={c} 
                            onImageClick={() => this.onImageClick(c)} 
                            onTitleClick={() => this.onTitleClick(c)}
                            key={c.idDrink} />
                    )}

                    <h2>Non-Alcoholic</h2>
                    {this.state.nonAlcoholicCocktails.map(c => 
                        <ListItem cocktail={c} 
                            onImageClick={() => this.onImageClick(c)} 
                            onTitleClick={() => this.onTitleClick(c)}
                            key={c.idDrink} />
                    )}

                    <h2>Ordinary</h2>
                    {this.state.ordinaryCocktails.map(c => 
                        <ListItem cocktail={c} 
                            onImageClick={() => this.onImageClick(c)} 
                            onTitleClick={() => this.onTitleClick(c)}
                            key={c.idDrink} />
                    )}

                    <h2>Cocktail glass</h2>
                    {this.state.cocktailGlasses.map(c => 
                        <ListItem cocktail={c} 
                            onImageClick={() => this.onImageClick(c)} 
                            onTitleClick={() => this.onTitleClick(c)}
                            key={c.idDrink} />
                    )}

                    <h2>Champagne flute</h2>
                    {this.state.cocktailChampagneFlutes.map(c => 
                        <ListItem cocktail={c} 
                            onImageClick={() => this.onImageClick(c)}
                            onTitleClick={() => this.onTitleClick(c)} 
                            key={c.idDrink} />
                    )}
                </div>

                <ListItemDetails hidden={!this.state.showImage} cocktail={this.state.currentCocktailSelected} onBackClick={this.onBackClick} />
            </div>
        )
    }
}

export default List;

