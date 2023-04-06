import { useState } from "react";

function NavBar ({pokemonList}){
    const pokemonButton = pokemonList.map(pokemon => ( <button onClick={pokemon.name}>{pokemon.name}</button>))
    console.log(pokemonButton)

    const handleClick = (pokemonName) => {

        // Si pokemonName est pikachu alors on déclenche alert
        if (pokemonName === "pikachu"){
             alert("Pikachu")
        } 
        console.log(pokemonName)

    }

    return(
        <div>
            {
                pokemonList.map(pokemon => (
                    <button onClick = {() => handleClick(pokemon.name)}>{pokemon.name}</button>
                     
                ))       
             }
        </div>
    )
}

export default NavBar;