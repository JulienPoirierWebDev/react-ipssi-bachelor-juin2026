import { useEffect, useState } from "react";
import PokeCard from "../Pokedex/PokeCard";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Accueil = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  // DO SOMETHING

  useEffect(() => {
    const getData = async () => {
      try {
        const request = await fetch("https://tyradex.app/api/v1/pokemon");
        if (request.ok) {
          const data = await request.json();
          setPokemons(data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Navbar />

      {loading ? (
        <p>Chargement en cours</p>
      ) : (
        pokemons.map((pokemon) => {
          if (pokemon.pokedex_id == 0) {
            return null;
          }
          return <PokeCard key={pokemon.pokedex_id} pokemon={pokemon} />;
        })
      )}

      <Footer />
    </>
  );
};

export default Accueil;
