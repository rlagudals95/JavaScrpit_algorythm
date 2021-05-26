const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  let score = Number(line); //여기에 숫자 하나를 넣는다고 생각하면 된다!

  if (score >= 90) {
    console.log("A"); //90 이상이면 A
  } else if (score >= 80 && score <= 89) {
    console.log("B"); // 80 ~ 89 는 B
  } else if (score >= 70 && score <= 79) {
    console.log("C");
  } else if (score >= 60 && score <= 69) {
    console.log("D");
  } else {
    console.log("F");
  }
  rl.close();
}).on("close", function () {
  process.exit();
});
