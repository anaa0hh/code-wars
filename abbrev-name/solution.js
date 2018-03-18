
'use strict';

//Create a function that does the following:
//The function will extract the first initial and last initial from the name given.
//The function will then covert them to uppercase(toUppercase) and return them with a '.' in between(concatenate two initials with a '.').

function abbrevName(name){
  let firstInitial = name.substring(0,1);
  let space = name.indexOf(' ');
  space++;
  let lastInitial = name.substr(space, 1);

  return(`${firstInitial.toUpperCase()}.${lastInitial.toUpperCase()}`);

}
console.log('Test1:  '+ abbrevName('Ana Ortega')); //
console.log('Test2:  '+ abbrevName('eric singleton')); //
