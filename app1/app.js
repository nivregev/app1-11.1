const chalk = require("chalk");
const cowsay = require("cowsay");
const oneLinerJoke = require("one-liner-joke");

const joke = chalk.blue(oneLinerJoke.getRandomJoke().body);
const cowSayJoke = cowsay.say({ text: joke, e: "0oO" });

console.log(cowSayJoke);
