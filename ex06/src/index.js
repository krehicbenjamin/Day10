var lion = {
  name: "Simba",
  legs: 4,
  tails: 1
};
function myFunction(propName, propVal) {
  lion[propName] = propVal;
  return lion;
}

myFunction("roar", "roar-roar");
console.log(lion);
module.exports = myFunction;
