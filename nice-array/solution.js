function isNice(arr){
  //1,6,2,5 is nice

  for(let i =0; i < arr.length; i++) {

    let num = arr[i];

    let hasLesser = arr.includes(num-1);

    let hasGreater = arr.includes(num+1);

    if (hasLesser || hasGreater) {

    //all good

    }else{
      return false;
    }
  }

  return arr.length > 1; //only get here if nice
}
