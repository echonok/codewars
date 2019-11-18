function reverse(str) {
  // WRITE SOME MAGIC
  const arr = str.split(' ');
  if (arr[0] === '') {
    const emptyFirst = arr[0];
    let itsEmpty = true;
    for (let i = 0; i < arr.length; i += 1) {
      itsEmpty = emptyFirst === arr[i];
    }
    if (itsEmpty) {
      return '';
    }
  }
  const reverseWord = (word) => {
    let revWord = '';
    for (let i = word.length - 1; i >= 0; i -= 1) {
      revWord += word[i];
    }
    return revWord;
  };

  for (let i = 1; i < arr.length; i += 2) {
    arr[i] = reverseWord(arr[i]);
  }
  return arr.join(' ');
}
