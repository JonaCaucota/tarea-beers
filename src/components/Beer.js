import React from "react";

function Beer(props) {


  return (
    <li>
      <div>
        <div>
            <img src={props.label}></img>
        </div>

        <div>
            <h3>{props.name}</h3>
            <h4>{props.type}</h4>
            <h5>{props.abv}</h5>
        </div>

        <div><button>Comprar</button></div>

      </div>
    </li>
  );
}

export default Beer;
