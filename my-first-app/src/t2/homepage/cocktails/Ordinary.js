import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from '../list/List';

export default function Ordinary() {
    const [cocktails, setCocktails] = useState([]);

    useEffect(
        () => {
            axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink")
                .then(r => setCocktails(r.data.drinks));
        }, [])

    return (
        <div>
            <h3>Ordinary drinks</h3> 
            <List cocktails={cocktails} cocktailType="ordinary"></List> 
        </div>
    )
}