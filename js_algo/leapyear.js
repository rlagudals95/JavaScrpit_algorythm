// 윤년 계산하기!

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  let year = Number(line); //여기에 숫자 하나를 넣는다고 생각하면 된다!

  if (year % 4 == 0 && year % 100 !== 0) {
    console.log(1);
  } else if (year % 400 === 0) {
    console.log(1);
  } else {
    console.log(0);
  }
  rl.close();
}).on("close", function () {
  process.exit();
});
