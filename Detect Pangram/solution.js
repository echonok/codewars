const isPangram = (pangram) => {
  const alfabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < alfabet.length; i += 1) {
    if (!pangram.toLowerCase().includes(alfabet[i])) {
      return false;
    }
  }
  return true
};