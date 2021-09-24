const catFunc = () => {
  process.stdin.on("data", (data) => {
    const input = data.toString().split(" ");
    const cmd = input[0];
    const fileName = input[1].slice(0, -1);

    if (cmd === "cat") {
      const fs = require("fs");
      fs.readFile("./" + fileName, "utf8", (err, data) => {
        if (err) {
          throw err;
        } else {
          process.stdout.write(data);
          process.stdout.write("prompt > ");
        }
      });
    }
  });
};

module.exports = catFunc;
