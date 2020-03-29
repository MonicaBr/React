import React from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            coffeeShops: ["Roast", "Status", "Cafeneaua Noastra", "Teo's"],
            foodShops: ["Auchan", "Bruno", "Kung food"],
            personalChoice: ""
        };

        this.personalChoiceClick = this.personalChoiceClick.bind(this);
    }

    personalChoiceClick() {
        this.setState({ personalChoice: "Cafeneaua Noastra" });
    }

    render() {
        return (
            <div>
                <h3>Coffee shops</h3>
                <div>{this.state.coffeeShops.map(i => <span>{i} </span>)}</div>
                
                <h3>Food shops</h3>
                <div>{this.state.foodShops.map(i => <span>{i} </span>)}</div>
                
                <h3>All shops</h3>
                <div>{ [...this.state.coffeeShops, ...this.state.foodShops].map(i => <span>{i} </span>) }</div>

                <h4>Psst! Wanna know my personal choice of coffee?</h4>
                <button onClick={this.personalChoiceClick}>Click here!</button>
                <p hidden={this.state.personalChoice === ""}>{this.state.personalChoice}! Can you spell it? It's {[...this.state.personalChoice].map(i => <span>{i} </span>)}</p>
            </div>
        );
    }
}

export default List;

ReactDOM.render(
    <List />,
    document.getElementById('root')
)