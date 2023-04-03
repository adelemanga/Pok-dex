import App from "../App";
import PropTypes from "prop-types";



function PokemonCard(props) {
  console.log(props)
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



  
  

export default PokemonCard

 
  

