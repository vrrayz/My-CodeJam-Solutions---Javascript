const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let currentline = 0;
function readline() {
  return input[currentline++];
}

let T = readline();
let N = 0;
let S = [];
for (let i = 1; i <= T; i++) {
    N = readline();
    S = readline().split(" ");
    console.log("Case #"+i+": "+checkStraight(N, S));
}

function checkStraight(n,s){
    let sortedDice = s.sort((a,b) => a - b);
    let straight = 0;
    for(let j = 0; j < sortedDice.length; j++){
        straight += 1;
        if(straight > sortedDice[j]){
            straight -= 1;
        }
    }
    return straight;
}