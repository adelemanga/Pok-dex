import App from "../App";
import PropTypes from "prop-types";


function PokemonCard({pokemon}) {
  return (
    <>
    <p>Hello i'm {pokemon.name} and this is me </p>
    <img src={pokemon.imgSrc}/>
    </>
  );
}
  
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired
  }).isRequired
  
}
  

export default PokemonCard

 
  

