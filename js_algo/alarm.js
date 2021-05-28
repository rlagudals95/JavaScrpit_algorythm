// 45분 일찍 일어나기

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  const input = line.split(" ");
  const h = Number(input[0]);
  const m = Number(input[1]);
  if (m >= 45) {
    console.log(h, m - 45);
  } else {
    console.log(h - 1, m + 60 - 45);
  }
}).on("close", function () {
  process.exit();
});
