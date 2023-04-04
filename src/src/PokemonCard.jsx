import App from "../App";

export default function PokemonCard(props) {
  console.log(props)
    return (
     <> <figure>
        <img src={props.pokemon.imgSrc} />
     </figure>
  
      <figcaption>{props.pokemon.name}</figcaption> 
      </>
     )
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

 
  

