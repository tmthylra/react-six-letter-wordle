function LetterButton ({letter, onClick, status}) {
    return(
        <button
            className={`rounded-lg px-2 py-1 m-1`}
            onClick={() => onClick(letter)}
        >
            {letter}
        </button>
    )
}