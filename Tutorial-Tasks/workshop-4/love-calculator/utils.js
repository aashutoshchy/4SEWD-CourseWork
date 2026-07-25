export default function generateLoveScore() {
  let loveScore = Math.floor(Math.random() * 100 + 1);
  return loveScore;
}

export function generateLoveMessage(loveScore) {
  if (loveScore >= 1 && loveScore <= 30) {
    return "Not a great match 😢";
  } else if (loveScore >= 31 && loveScore <= 70) {
    return "Could work 🙂";
  } else if (loveScore >= 71 && loveScore <= 100) {
    return "Perfect match ❤️";
  } else {
    return "Something went wrong";
  }
}
