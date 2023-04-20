import React from "react";
import '../App.css'

export default function WinScreen({ onClick, show, gameStatus }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-2 win-screen ${show ? 'show' : ''}`}>
      <div className="text-4xl font-semibold">You {gameStatus}! Come back tomorrow!</div>
        <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Close
        </button>
    </div>
  );
}