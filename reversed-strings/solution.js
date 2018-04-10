function solution(str){
  let reverseString = '';
  let i = str.length - 1;
  while(i >= 0) {
    reverseString += str[i];
    console.log(reverseString);
    i--
  }
  return reverseString;
}