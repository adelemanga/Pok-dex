import { useState } from "react";

function NavBar ({pokemonList, handleClick, pokemonList}){
    const pokemonButton = pokemonList.map(pokemon => ( <button onClick={pokemon.name}>{pokemon.name}</button>))
    console.log(pokemonButton)

    return(
        <div>
            {
                pokemonList.map(pokemon => (
                    <button onClick = {pokemon.name}>{pokemon.name}</button>
                
                ))       
             }
        </div>
    )
}