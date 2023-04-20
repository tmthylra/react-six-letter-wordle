import seedrandom from "seedrandom";

function checkGuess(targetWord, guess) {
  let target = targetWord.split("");
  let guesss = guess.split("");
  let result = [];
  let letters = {};

  for (let i = 0; i < guesss.length; i++) {
    if (guesss[i] === targetWord[i]) {
      result.push("correct");
      letters[guesss[i]] = 'correct';
    } else if (target.includes(guesss[i])) {
      result.push("partially-correct");
      letters[guesss[i]] = 'partially-correct';
    } else {
      result.push("incorrect");
      letters[guesss[i]] = 'incorrect';
    }
  }
  //console.log(targetWord, guess, result, letters);
  return { result, letters };
}

function getRandomWord(data) {
  // seed ends up being YYYYMMDD
  const seed = getTodayDate();
  const rng = seedrandom(seed);
  return data[Math.floor(rng() * data.length)];
}

function getTodayDate() {
  const today = new Date();
  return (
    today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate()
  );
}

export { getRandomWord, checkGuess, getTodayDate };
