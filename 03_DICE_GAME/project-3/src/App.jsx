import GamePlay from "./components/GamePlay";
import StartGame from "./components/StartGame";
import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleIsGameStarted = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? (
        <GamePlay />
      ) : (
        <StartGame toggle={toggleIsGameStarted} />
      )}
    </>
  );
}

export default App;
