import App from "../App";
import PropTypes from "prop-types";


function PokemonCard(props) {
  console.log(pokemon)
  return (
    <>
      <div>{props.pokemon.name}</div>

      {props.pokemon.imgSrc ? <img src={props.pokemon.imgSrc}></img> : <p>???</p>}

    </>
  );
}

PokemonCard.PropTypes = { 
    props: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
    })
  }. isRequired



  // const pokemonList = [
  //   {
  //       name: "bulbasaur",
  //       imgSrc:
  //         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  //     },
  //     {
  //       name: "charmander",
  //       imgSrc:
  //         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  //     },
  //     {
  //       name: "squirtle",
  //       imgSrc:
  //         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  //     },
  //     {
  //       name: "pikachu",
  //       imgSrc:
  //         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  //     },
  //     {
  //       name: "mew",
  //     },
  //   ];
  

export default PokemonCard

 
  

