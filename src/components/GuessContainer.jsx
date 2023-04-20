import React from "react";

function GuessContainer({ guesses, currentGuess, gameStatus }) {
  let letters = currentGuess.split("");

  const previousGuesses = guesses.map((guess, index) => {
    let word = guess.guess.split('')
    return(
    <div className="flex items-center justify-center gap-2" key={index}>
      {
        Array.from({ length: 6 }, (_, rowIndex) => {
          let letterStatus = '';

          if (guess.result[rowIndex] === 'correct') {
          letterStatus = 'bg-green-500 border-green-700';
        } else if (guess.result[rowIndex] === 'partially-correct') {
          letterStatus = 'bg-yellow-500 border-yellow-700';
        } else {
          letterStatus = 'bg-white border-gray-300';
        }
          
          return (
          <div 
            className={`w-12 h-12 flex items-center justify-center text-xl font-semibold border-2 border-gray-300 rounded ${letterStatus}`} 
            key={rowIndex}
            >
            {word[rowIndex]}
          </div>
        )})
      }
    </div>);
  });
  
  let input = Array.from({ length: 6 }, (_, rowIndex) => (
    <div 
      className="w-12 h-12 flex items-center justify-center text-xl font-semibold bg-white border-2 border-gray-300 rounded" 
      key={rowIndex}
      >
      {letters[rowIndex]}
    </div>
  ));

  let remainingSquares = Array.from({ length: 6 - guesses.length }, (_, rowIndex) => (
    <div 
      className="flex items-center justify-center gap-2"
      key={rowIndex}
    >
      {Array.from({ length: 6 }, (_, colIndex) => (
      <div 
        className="w-12 h-12 flex items-center justify-center text-xl font-semibold bg-white border-2 border-gray-300 rounded" 
        key={colIndex}
        >
      </div>
      ))}

    </div>
    ));

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {previousGuesses}
      <div className="flex items-center justify-center gap-2">{input}</div>
      {remainingSquares}
      
    </div>
  );
}

export default GuessContainer;