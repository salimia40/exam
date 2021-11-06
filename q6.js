const fs = require("fs");

function q(n) {
  var x = 2 * n + 1;

  for (let i = 1; i <= x; i++) {
    print(i, x);
  }

  for (let m = x - 1; m > 0; m--) {
    print(m, x);
  }
}

function print(i, x) {
  var str = "";
  var spaceCount = Math.floor(x - i / 2);
  for (let j = 0; j < spaceCount; j++) {
    str += " ";
  }
  for (let k = 0; k < i; k++) {
    str += "*";
  }

  fs.appendFileSync("message.txt", str + "\n");
}

q(3);
