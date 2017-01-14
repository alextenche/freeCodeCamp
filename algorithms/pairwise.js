function pairwise(arr, arg){
  var result = arr.reduce(function(accumulator, currentValue, currentIndex, initialArray) {
      for (var i = currentIndex; i < initialArray.length; i += 1) {
        if ((currentValue + initialArray[i]) == 7) {
          accumulator += i + currentIndex;
          initialArray[initialArray.indexOf(currentIndex)] = 0;
          initialArray[initialArray.indexOf(i)] = 0;
        }
    }
    return accumulator;
  }, 0);
}

pairwise([1,4,2,3,0,5], 7);
