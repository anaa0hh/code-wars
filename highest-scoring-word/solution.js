function high(x){
    let scoreArray = [];
    let highWord = '';
    let highScore = 0;
    let splitArray = x.split(' ');
    splitArray.forEach(function(word) {
    let wordValue = getWordValue(word);
    scoreArray.push(wordValue);
    });
    for (let i=0; i<scoreArray.length; i++) {
      if (scoreArray[i] > highScore) {
        highScore = scoreArray[i];
        highWord = splitArray[i];
      }
    }
    return highWord;
  }
  
  function getWordValue(word) {
    let wordValue = 0;
    for (let i=0; i<word.length;i++) {
    wordValue += (word.charCodeAt(i)-96);
    }
    return wordValue;
  }