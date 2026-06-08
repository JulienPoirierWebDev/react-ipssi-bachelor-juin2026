import { useEffect, useState } from "react";
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
        pokemons.map((pokemon) => (
          <div key={pokemon.id}>
            <p>{pokemon.name.fr}</p>
          </div>
        ))
      )}

      <Footer />
    </>
  );
};

export default Accueil;
