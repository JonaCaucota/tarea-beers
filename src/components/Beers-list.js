import React from "react";
import Beer from "./Beer";
import beers from "../data/data.js";
import "../App.css"

function BeerList() {
    console.log();
    return (
        <ul className="container">
            {beers.map(beer => 
                <Beer name={beer.name} abv={beer.abv} label={beer.label} type={beer.type} ></Beer>
            )}
        </ul>
    );
}

export default BeerList;