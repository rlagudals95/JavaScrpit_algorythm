const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const input = line.split(" ");
  const h = Number(input[0]);
  const m = Number(input[1]);

}).on("close", function () {
  process.exit();
});
