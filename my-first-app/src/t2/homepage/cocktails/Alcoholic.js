import React, {useState, useEffect} from 'react';
import axios from 'axios';
import List from '../list/List';

export default function Alcoholic() {
    const [cocktails, setCocktails] = useState([]);

    useEffect(
        () => {
            axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
            .then(r => setCocktails(r.data.drinks));
        }, [])

    return (
        <div>
            <h3>Alcoholic cocktails</h3>
            <List cocktails={cocktails} cocktailType="alcoholic"></List> 
        </div>
    )
}