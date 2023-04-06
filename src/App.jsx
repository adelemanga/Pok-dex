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



  
  
 /* const [pokemonIndex, setPokemonIndex] = useState({name:"bulbasaur"})
  const mouseClick = () => {
    setPokemonIndex({name:"charmander" || "squirtle"})
  }
  return (<div>
    <p>{pokemonIndex.name}</p>
    <button onClick={handleClick}>Suivant</button>
  </div>);*/
  
    
  /*const btn = document.createElement("button")

  btn.textContent = "Suivant"
  
  const handleClick = (event) => {
    console.log(event.target)
  }
  
  btn.addEventListener("click", handleClick)
  
  document.body.appendChild(btn)*/





/*const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

       <PokemonCard
       pokemon={pokemonList[0]}
       />

    </div>
  )*/
}

export default App
