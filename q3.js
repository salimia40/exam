function q(input) {
  var chArray = input.toLowerCase();
  var output = 1;
  for (var i = 0; i < chArray.length; i++) {
    var char = chArray[i];
    if (['k' ,'g' , 'r', 'f'].includes(char)) {
      output *= 2;
    }
  }
  return output;
}

console.log(q("FILIPEK"));
