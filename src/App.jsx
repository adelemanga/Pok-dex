import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './src/PokemonCard'




const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];



function App() {
  
    const [pokemonIndex, setPokemonIndex] = useState(0);
    const handlePrecedingClick = () => {
      setPokemonIndex(pokemonIndex - 1)
    }
    
    const hadleNextClick = () => {
      setPokemonIndex( pokemonIndex + 1)
    }

    return <div>
      <PokemonCard pokemon = {pokemonList[pokemonIndex]}/>
      {
        pokemonIndex > 0 && <button onClick = {handlePrecedingClick} >Précédent</button>
      }

      {pokemonIndex< pokemonList.length -1 && <button onClick={hadleNextClick}> Suivant</button>}
      </div>
    }
     

export default App
