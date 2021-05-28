const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  let Num = Number(line);

  for (let i = 1; i < 10; i++) {
    console.log(i * Num);
  }

  rl.close();
}).on("close", function () {
  process.exit();
});
