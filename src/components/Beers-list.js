import React from "react";
import Beer from "./Beer";
import beers from "../data/data.js";

function BeerList() {
    console.log();
    return (
        <ul>
            {beers.map(beer => 
                <Beer name={beer.name} abv={beer.abv} label={beer.label} type={beer.type} ></Beer>
            )}
        </ul>
    );
}

export default BeerList;