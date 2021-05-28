// 좌표 위치값에 따른 계산

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = []; //숫자 두개를 여기 넣는다
rl.on("line", function (line) {
  if (line === "") {
    // line이 "" 빈값일때 종료!
    rl.close();
  }
  input.push(line);
}).on("close", function () {
  const x = input[0]; // 여기서 넣어준 두개의 수가 line으로 들어가 input에 들어 간단뜻인가?
  const y = input[1];

  if (x > 0) {
    if (y > 0) {
      console.log(1);
    } else {
      console.log(4);
    }
  } else {
    if (y > 0) {
      console.log(2);
    } else {
      console.log(3);
    }
  }

  process.exit();
});
