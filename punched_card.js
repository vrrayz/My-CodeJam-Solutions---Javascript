const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let currentline = 0;
function readline() {
  return input[currentline++];
}

let T = readline();
for (let i = 1; i <= T; i++) {
  let B = readline().split(" ");
  console.log("Case #"+i+":");
  displayAscii(B[0],B[1]);
}
function displayAscii(R, C) {
  let topBottomBorder = "+-";
  let sideBorder = "|.";
  for (let i = 1; i <= R; i++) {
    if (i == 1) {
      console.log(".." + topBottomBorder.repeat(C - 1) + "+");
      console.log(".." + sideBorder.repeat(C - 1) + "|");
    } else {
      console.log(topBottomBorder.repeat(C) + "+");
      console.log(sideBorder.repeat(C) + "|");
    }
    if (i == R) {
      console.log(topBottomBorder.repeat(C) + "+");
    }
    // console.log("======");
  }
}