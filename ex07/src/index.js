var lion = {
  name: "Simba",
  legs: 4,
  tails: 1,
  roar: "roar-roar"
};
function myFunction(propName) {
  delete lion[propName];
  return lion;
}

myFunction("roar");
console.log(lion);
module.exports = myFunction;
