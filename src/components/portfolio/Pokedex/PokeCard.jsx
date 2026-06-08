const PokeCard = ({pokemon}) => {
  return (
    <div key={pokemon.pokedex_id}>
      <p>{pokemon.name.fr}</p>
      <img src={pokemon.sprites.regular} alt="" loading="lazy" />
      {pokemon.types &&
        pokemon.types.map((type) => <p key={pokemon.pokedex_id + type.name}>{type.name}</p>)}
    </div>
  );
};

export default PokeCard;
