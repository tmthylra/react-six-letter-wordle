import React from "react";

export default function WinScreen({ onClick, show, gameStatus }) {
  const winScreenBaseClasses = `fixed bottom-0 left-0 right-0 bg-white p-4 text-center transform transition-transform duration-300 ease-in-out`;

  const winScreenHiddenClasses = `translate-y-full`;
  const winScreenVisibleClasses = `translate-y-0`;
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 ${winScreenBaseClasses} ${
        show ? winScreenVisibleClasses : winScreenHiddenClasses
      } `}
    >
      <div className="text-4xl font-semibold">
        You {gameStatus}! Come back tomorrow!
      </div>
      <button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Close
      </button>
    </div>
  );
}
