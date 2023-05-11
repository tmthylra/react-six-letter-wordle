import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import GuessContainer from "./components/GuessContainer";
import InputContainer from "./components/InputContainer";
import WinScreen from "./components/WinScreen";
import { getRandomWord, checkGuess } from "./utils";

function App() {
  const [wordList, setWordList] = useState(null);
  const [targetWord, setTargetWord] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [remainingGuesses, setRemainingGuesses] = useState(7);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameStatus, setGameStatus] = useState("in-progress");
  const [showWinScreen, setShowWinScreen] = useState(false);
  const [letterStatus, setLetterStatus] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
    g: "",
    h: "",
    i: "",
    j: "",
    k: "",
    l: "",
    m: "",
    n: "",
    o: "",
    p: "",
    q: "",
    r: "",
    s: "",
    t: "",
    u: "",
    v: "",
    w: "",
    x: "",
    y: "",
    z: "",
  });

  useEffect(() => {
    fetch("/words.json")
      .then((res) => res.json())
      .then((data) => {
        setWordList(data);
        setTargetWord(getRandomWord(data));
      })
      .catch((err) => console.error(err));

    window.addEventListener("keyup", handleKeyboardInput);

    return () => {
      window.removeEventListener("keyup", handleKeyboardInput);
    };
  }, [currentGuess]);

  const handleGuess = (guess, currentGuess) => {
    if (guess.toLowerCase() === "enter") {
      const enteredGuess = currentGuess.toLowerCase();
      // Validate the guess
      if (!wordList.includes(enteredGuess)) {
        toast.error("Not a word!", { duration: 2000 });
        setCurrentGuess("");
        return;
      } else if (
        guesses.filter((guess) => guess.guess === currentGuess).length > 0
      ) {
        toast.error("Already guessed!", { duration: 2000 });
        setCurrentGuess("");
        return;
      }

      // Check the guess
      const { result, letters } = checkGuess(targetWord, enteredGuess);
      setGuesses([...guesses, { guess: currentGuess, result }]);
      if (
        result.includes("incorrect") ||
        result.includes("partially-correct")
      ) {
        setRemainingGuesses(remainingGuesses - 1);
        if (remainingGuesses === 1) {
          setGameStatus("lost");
          setShowWinScreen(true);
        }
        setLetterStatus({ ...letterStatus, ...letters });
      } else {
        setGameStatus("won");
        setShowWinScreen(true);
      }
      setCurrentGuess("");
    } else if (
      guess.toLowerCase() === "delete" ||
      guess.toLowerCase() === "backspace"
    ) {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else {
      if (currentGuess.length < 6) setCurrentGuess(currentGuess + guess);
    }
  };

  const handleKeyboardInput = (event) => {
    const letter = event.key.toUpperCase();
    if (gameStatus === "won" || gameStatus === "lost") return;
    else if (
      letter.match(/^[A-Z]$/) ||
      letter === "BACKSPACE" ||
      letter === "ENTER"
    )
      handleGuess(letter, currentGuess);
  };

  return (
    <div className="h-screen overflow-hidden container mx-auto flex flex-col items-center justify-center md:p-8 lg:p-12 w-full md:w-3/4 lg:w-1/2">
      <div className="pb-12">
        <h1 className="pb-4 text-5xl">Six-Letter Wordle</h1>
        <Toaster />
        <GuessContainer guesses={guesses} currentGuess={currentGuess} />
      </div>
      <InputContainer
        onClick={handleGuess}
        letterStatus={letterStatus}
        gameStatus={gameStatus}
        currentGuess={currentGuess}
      />
      <WinScreen
        onClick={() => setShowWinScreen(false)}
        show={showWinScreen}
        gameStatus={gameStatus}
      />
    </div>
  );
}

export default App;
