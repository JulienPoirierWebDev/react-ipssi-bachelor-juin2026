import { useState } from "react";

const Calculatrice = () => {
  const [compteur, setCompteur] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const handleClick = () => {
    setCompteur(compteur + 1);
  };

  const handleBlurNumber1 = (event) => {
    setNumber1(event.target.value);
  };

  const handleChangeNumber2 = (event) => {
    setNumber2(event.target.value);
  };
  return (
    <>
      <button onClick={handleClick}>Cliquez-moi</button>
      <p>J'ai été cliqué {compteur} fois !</p>

      <div className="numberBox">
        <label htmlFor="number1">Entrez un nombre</label>
        <input
          type="number"
          min="0"
          name="number1"
          id="number1"
          onBlur={handleBlurNumber1}
          defaultValue={0}
        />
        <label htmlFor="number2">Entrez un nombre</label>
        <input
          type="number"
          min="0"
          name="number2"
          id="number2"
          onChange={handleChangeNumber2}
          value={number2}
        />
      </div>

      <div className="result">
        <p>Votre nombre multiplié par deux est : {number1 * 2}</p>
        <p>L'addition des deux nombres est {Number(number1) + Number(number2)}</p>
      </div>

      {/* Ajouter un number2 et faire en sorte que lorsque les deux nombres sont rentrés par l'utilisateur
        afficher number1 + number2
        TIPS : vous pouvez ajouter un bouton ou bien vérifier si les deux nombres sont saisies, etc. etc.
      */}
    </>
  );
};

export default Calculatrice;
