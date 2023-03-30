import App from "../App";

export default function PokemonCard() {
  const pokemon = pokemonList[0];
  console.log(pokemon)
  return (
    <>
      <div>{pokemon.name}</div>

      {pokemon.imgSrc ? <img src={pokemon.imgSrc}></img> : <p>???</p>}
    </>
  );
  

}



const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];


