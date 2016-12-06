function getIndexToIns(arr, num) {

  arr.sort(compareNumbers));

  for (var i = 0; i <= arr.length; i += 1) {
    if (num <= arr[i]) {
      return i;
    }
  }

  return arr.length;
}

function compareNumbers(a, b) {
  return a - b;
}

getIndexToIns([40, 60, 3, 5], 50);
