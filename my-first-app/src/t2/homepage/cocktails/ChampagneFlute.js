import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from '../list/List';

export default function ChampagneFlute() {
    const [cocktails, setCocktails] = useState([]);

    useEffect (
        () => {
            axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute")
            .then(r => setCocktails(r.data.drinks));
        }, []);

    return (
        <div>
            <h3>Champagne flutes</h3> 
            <List cocktails={cocktails} cocktailType="champagne-flute"></List>
        </div>
    )
}