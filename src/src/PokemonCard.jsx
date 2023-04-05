import App from "../App";
import PropTypes from "prop-types";


/*function PokemonCard(props) {
  return (
    <>
      <div>{props.pokemon.name}</div>

      {props.pokemon.imgSrc ? <img src={props.pokemon.imgSrc}></img> : <p>???</p>}

    </>
  );
}*/

function PokemonCard({pokemon}){
  return(
    (
      <figure>
        {
          pokemon.imgSrc ? <img src={pokemon.imgSrc} alt= {pokemon.name}/> 
          : <p>???</p>
        }
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    )
  )
}

PokemonCard.PropTypes = { 
    props: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
    })
  }. isRequired 



 
  

export default PokemonCard

 
  

