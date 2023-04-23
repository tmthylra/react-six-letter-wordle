import React from 'react';

function InputContainer({ onClick, letterStatus, gameStatus }) {
    const rows = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Delete']
    ]

  
  return (
    <div className="flex items-center flex-col gap-2">
      {rows.map((row, index) => 
        <div key={index} className="flex flex-row items-center justify-center gap-2">
            {row.map((letter) => {
              let className = '';
              if(letterStatus[letter.toLowerCase()] === 'correct') {
                className = 'bg-green-500';
              } else if (letterStatus[letter.toLowerCase()] === 'incorrect') {
                className = 'bg-gray-300';
              } else if (letterStatus[letter.toLowerCase()] === 'partially-correct') {
                className = 'bg-yellow-500';
              }
              return (
                <button 
                  key={letter}
                  onClick={() => onClick(letter)}
                  className={`rounded-lg border border-transparent px-2 py-2 text-base text-center hover:border-gray-300 transition-colors duration-200 cursor-pointer font-bold ${className ? className : 'bg-gray-100'}`}
                  disabled={gameStatus === 'won' || gameStatus === 'lost'}
                >
                  {letter}
                </button>
              )
                }
            )}
        </div>
      )}
    </div>
  );
}

export default InputContainer;