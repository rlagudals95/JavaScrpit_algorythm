const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input = [];
rl.on("line", function (line) {
  if (line === "") {
    rl.close();
  }

  input.push(line);
}).on("close", function () {
  //   const input = line.split(" ");

  const participant = input[0];
  const completion = input[1];
  //   let ansewr = participant.filter((p) => !completion.includes(x));
  //   console.log(participant, completion);
  console.log(ansewr);
  process.exit();
});
