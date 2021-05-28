const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let answer = "";
rl.on("line", (line) => {
  const input = line.split(" "); // input은 line을 공백으로 나눠진 배열

  // for문 대신 이렇게 input의 length로 조건을 주어 훨씬 빠른계산을 가능하게 했다
  if (input.length === 2) {
    const A = Number(input[0]); //
    const B = Number(input[1]);
    answer += A + B + "\n"; // 정답들 개행처리
  }
}).on("close", () => {
  console.log(answer);
  process.exit();
});
