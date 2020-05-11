import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from '../list/List';

export default function Glass() {
    const [cocktails, setCocktails] = useState([]);

    useEffect(
        () => {
            axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass")
                .then(r => setCocktails(r.data.drinks));
        }, []);

    return (
        <div>
            <h3>Cocktails glasses</h3> 
            <List cocktails={cocktails} cocktailType="glasses"></List> 
        </div>
    )
}