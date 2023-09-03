const path = require("node:path");
const fs = require("node:fs/promises");

const from = path.resolve(__dirname, "./files/text.txt");
const to = path.resolve(__dirname, "./files/copy.txt");

fs.copyFile(from, to).then(console.log);
