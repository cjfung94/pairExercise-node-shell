const curl = require("request");
// use GET /index.html
const curlFunc = () => {
  process.stdin.on("data", (data) => {
    const input = data.toString().split(" ");
    const cmd = input[0];
    const link = input[1];

    if (cmd === "curl") {
      curl(link, function (error, response, body) {
        console.error("error", error);
        console.log("statusCode:", response && response.statusCode);
        console.log("body:", body);
      });
    }
  });
};

module.exports = curlFunc;
