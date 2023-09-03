const add = (x, y) => {
  return x + y;
};

const sub = (x, y) => {
  return x - y;
};

const multiply = (x, y) => {
  return x * y;
};

const divide = (x, y) => {
  return x / y;
};

const randomizer = (max) => {
  return Math.floor(Math.random() * max);
};

console.log("calc START");

console.log("calc END");

module.exports = {
  add,
  sub,
  multiply,
  divide,
  randomizer,
};
