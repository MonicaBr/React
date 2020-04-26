import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Alcoholic from './cocktails/Alcoholic';
import NonAlcoholic from './cocktails/NonAlcoholic';
import Ordinary from './cocktails/Ordinary';
import Glass from './cocktails/Glass';
import ChampagneFlute from './cocktails/ChampagneFlute';
import List from './list/List';
import CocktailMenu from './CocktailMenu';
import CocktailDetails from '../details/CocktailDetails';

class CocktailHome extends React.Component {
    render() {
        return (
            <div>
                <h1>Cocktails!</h1>
                <BrowserRouter>    
                    <CocktailMenu />

                    <Switch>
                        <Route exact path="/" component={List} />
                        <Route path="/cocktails/:cocktailId" component={CocktailDetails}></Route>
                        <Route path="/alcoholic" component={Alcoholic} />
                        <Route path="/non-alcoholic" component={NonAlcoholic} />
                        <Route path="/ordinary" component={Ordinary} />
                        <Route path="/glasses" component={Glass} />
                        <Route path="/champagne-flute" component={ChampagneFlute} />
                        <Route path="*" render={() => <Redirect to={{pathname: "/"}} />} />                        
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default CocktailHome;