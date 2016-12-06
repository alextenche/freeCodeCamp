'use strict';

function destroyer(arr) {

  var argumentsArray = arguments;

  function removeIfInArray(value) {
    for (let i = 1; i <= arguments.length; i += 1) {
      if (value === argumentsArray[i]) {
        return false
      }
    }
    return true;
  }

  return arr.filter(removeIfInArray);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
