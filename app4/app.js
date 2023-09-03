const process = require("node:process");

const memory = process.memoryUsage();
const totalMemory = Number(memory.rss);
const usedMemory = Number(memory.heapUsed);
const leftMemory = totalMemory - usedMemory;

console.log(leftMemory);
