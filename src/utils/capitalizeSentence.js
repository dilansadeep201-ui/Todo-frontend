export const capitalizeSentence = (sentence) => {
  let lowerSentence = sentence.toLowerCase();
  let firstLatter = lowerSentence.charAt(0).toUpperCase();
  let rest = lowerSentence.slice(1);

  return firstLatter + rest;
};
