var myClothes = {
    hat: "Fedora",
    shirt: "Nike",
    shoes: "Converse"
};
function myFucntion(myObj){
    var hatValue = myObj.hat;
    var shirtValue = myObj.shirt;
    var shoesValue = myObj.shoes;
    return {hatValue, shirtValue, shoesValue};
}

console.log(myFucntion(myClothes));
module.exports = myFucntion(myClothes);