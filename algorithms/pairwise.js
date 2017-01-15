function pairwise(arr, arg){
  var result = arr.reduce(function(accumulator, currentValue, currentIndex, initialArray) {
    for (var i = currentIndex + 1; i < initialArray.length; i++) {
      if (currentValue !== undefined && currentValue + initialArray[i] == arg) {
        accumulator += currentIndex + i;
        currentIndex = initialArray[i] = undefined;
        break;
      }
    }
    return accumulator;
  }, 0);
  return result;
}
pairwise([1, 1, 1], 2);
