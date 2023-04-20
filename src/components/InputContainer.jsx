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
                        className={`w-12 h-12 flex items-center justify-center text-xl font-semibold border-2 rounded ${className}`}
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