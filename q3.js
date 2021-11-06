function q(input) {
  var chArray = input.toLowerCase();
  var output = 1;
  for (var i = 0; i < chArray.length; i++) {
    var char = chArray[i];
    if (char  == 'k' || char == 'g' || char == 'f') {
      output *= 2;
    } else if (char == 'r') {
      output *= 3;
    }
  }
  return output;
}

console.log(q("FILIPEK"));
