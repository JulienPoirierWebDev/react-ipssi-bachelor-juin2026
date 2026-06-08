import Accueil from "./components/portfolio/Accueil/Accueil";

function App() {
  // Un composant : idéalement : entre 10 et 30 lignes.
  // Si plus de 100, il est trop gros
  // partie logique

  // const items = ["Accueil", "Produits", "Contact"];

  // partie UI / UX
  return (
    <div>
      <Accueil />
      {/**
      *
      <Header items={items} image={logo} />

      <main>
        <h1>Premiers pas en React</h1>

        <p>Hello</p>
      </main>

      <Footer />
      */}
    </div>
  );
}

export default App;
