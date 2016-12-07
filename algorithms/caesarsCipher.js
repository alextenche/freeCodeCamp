function rot13(initialString) { // LBH QVQ VG!

  var codedString = '';

  for (var i = 0; i < initialString.length; i += 1) {
    var letterCode = initialString.charCodeAt(i);

    if (letterCode >= 65 && letterCode <= 77) {
      codedString += String.fromCharCode(letterCode + 13);
    } else if (letterCode >= 78 && letterCode <= 90) {
      codedString += String.fromCharCode(letterCode - 13);
    } else {
      codedString += String.fromCharCode(letterCode);
    }
  }

  return codedString;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
