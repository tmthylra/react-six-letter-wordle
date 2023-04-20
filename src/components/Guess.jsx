import React from "react";

export default function Guess ({ guess }) {
    console.log("Guess from Guess.jsx: " + guess)
    let word = guess.guess.split('');
    let row = Array.from({ length: 6 }, (_, rowIndex) => (
        <div 
          className="w-12 h-12 flex items-center justify-center text-xl font-semibold bg-white border-2 border-gray-300 rounded" 
          key={rowIndex}
          >
          {word[rowIndex]}
        </div>
      ));

    return(
        {row}
    );
    
}