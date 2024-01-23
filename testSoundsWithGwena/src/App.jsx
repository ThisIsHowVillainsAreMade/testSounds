import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import viteSound from "./assets/audio/creepy-music-box-halloween-music-horror-scary-spooky-dark-ambient-118577.mp3"; // Ajoutez le chemin correct vers votre fichier audio

function App() {
  const [viteClicked, setViteClicked] = useState(false);
  const [audioTest] = useState(new Audio(viteSound));

  const playViteSound = () => {
    if (viteClicked) {
      // Si le son est déjà en train de jouer, remet la position de lecture à zéro et redémarre la lecture
      audioTest.currentTime = 0;
      audioTest.play();
      // eslint-disable-next-line no-dupe-else-if
    } else if (viteClicked) {
      audioTest.pause();
    } else {
      // Si le son n'est pas en train de jouer, commence la lecture
      audioTest.play();
    }
    // Met à jour l'état pour refléter le changement de clic
    setViteClicked(!viteClicked);
  };

  return (
    <>
      <div>
        <a onClick={playViteSound}>
          <img
            src={viteLogo}
            className={`logo ${viteClicked ? "clicked" : ""}`}
            alt="Logo Vite"
          />
        </a>
        <button href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="Logo React" />
        </button>
      </div>
      <div className="card"></div>
      <p className="read-the-docs">
        Cliquez sur le logo Vite pour jouer/arrêter le son.
      </p>
    </>
  );
}

export default App;
