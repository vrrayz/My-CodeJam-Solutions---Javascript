const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let currentline = 0;
function readline() {
  return input[currentline++];
}

let T = readline();
let B = [];
for (let i = 1; i <= T * 3; i++) {
    B.push(readline().split(" "))
    if(B.length == 3){
        console.log("Case #"+(i/3)+": "+threeDPrint(B));
        // threeDPrint(B)
        B = [];
    }
}
function threeDPrint(arr) {
  let lowest = [];
  lowest.push([arr[0][0], arr[1][0], arr[2][0]].sort((a, b) => a - b)[0]);
  lowest.push([arr[0][1], arr[1][1], arr[2][1]].sort((a, b) => a - b)[0]);
  lowest.push([arr[0][2], arr[1][2], arr[2][2]].sort((a, b) => a - b)[0]);
  lowest.push([arr[0][3], arr[1][3], arr[2][3]].sort((a, b) => a - b)[0]);

  let totalPrint = Number(lowest[0]) + Number(lowest[1]) + Number(lowest[2]) + Number(lowest[3]);
//   console.log(lowest[0] + 1)
  let currentTotal = totalPrint - Math.pow(10, 6);
  if (currentTotal < 0) {
    return "IMPOSSIBLE";
  } else if (currentTotal == 0) {
    return `${lowest[0]} ${lowest[1]} ${lowest[2]} ${lowest[3]}`;
  } else {
    let j = 0;
    let prevTotal = 0;
    do {
      if (lowest[j] > 0) {
        prevTotal = currentTotal;
        currentTotal -= lowest[j];
        if (currentTotal >= 0) {
          lowest[j] = 0;
        }
        if (currentTotal < 0) {
          lowest[j] = lowest[j] - prevTotal;
        }
      }
      j++;
    } while (currentTotal > 0 && j < 4);
    return `${lowest[0]} ${lowest[1]} ${lowest[2]} ${lowest[3]}`;
  }
}
// console.log(B)