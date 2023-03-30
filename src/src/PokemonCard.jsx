import App from "../App";

export default function PokemonCard(props) {
  console.log(props.pokemon)
  return (
    <>
      <div>{props.pokemon.name}</div>

      {props.pokemon.imgSrc ? <img src={props.pokemon.imgSrc}></img> : <p>???</p>}

      
    </>
  );
  
}

// export default function (){
//   const pokemon = pokemonList[0];
//   console.log(pokemon)
//   return (
//     <>
//       <div>{pokemon.name}</div>

//       {pokemon.imgSrc ? <img src={pokemon.imgSrc}></img> : <p>???</p>}

//     </>)
// }

 
  

