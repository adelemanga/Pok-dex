import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './src/PokemonCard'
import { pokemonList } from './utils'
import NavBar from './src/Navbar'



 function App () {
  
  const handleClick= () => {
    alert("hello pokemon trainer :")
    alert("pika pikachu !!!");
  }
  return (
    <>
      <NavBar pokemonList={pokemonList} />
      <button onClick={handleClick}> Click me </button>
    </>
  );







  const [pokemonIndex, setPokemonIndex] = useState(0)
  return (
   <div>
     <Navbar pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} pokemonList={pokemonList}/>
     <PokemonCard pokemon = { pokemonList[pokemonIndex]}/>
   </div>
  )



  
  
}

export default App
