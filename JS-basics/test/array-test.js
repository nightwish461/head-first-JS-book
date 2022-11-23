const expect = require("chai").expect;
const arraysJS = require("../arrays.js");

describe("Function in JS test", function () {
  const bobaBeverages = [
    { name: "Milk Tea", price: 5 },
    { name: "Seasalt Coffee", price: 4.5 },
    { name: "Moonlight Mango", price: 5 },
    { name: "Seasalt Matcha Tea", price: 4.5 },
    { name: "Anteaoxidant", price: 4 },
    { name: "Seasalt Coffee Latte", price: 6 },
  ];

  describe("#mapNumbers", function () {
    it("convert array of objects to array of numbers", function () {
      var numberArray = [
        { num: 3, points: 657 },
        { num: 5 },
        { num: 7 },
        { num: 9 },
        { num: 46 },
      ];
      const numbers = arraysJS.mapNumbers(numberArray);
      expect(numbers[0]).to.equal(3);
      //expect(numbers).contains([3, 5, 7, 9, 46]);
      expect(numbers).to.eql([3, 5, 7, 9, 46]);
    });
  });

  describe("#using filter and map together", function () {
    it("first filter and map by name", function () {
      const coffees = bobaBeverages
        .filter((beverage) => beverage.name.toLowerCase().includes("coffee"))
        .map((coffee) => coffee.name);

      expect(coffees).to.eql(["Seasalt Coffee", "Seasalt Coffee Latte"]);
    });

    it("first map, then filter by name", function () {
      const coffees = bobaBeverages
        .map((tea) => tea.name)
        .filter((tea) => tea.toLowerCase().includes("coffee"));
      expect(coffees).to.eql(["Seasalt Coffee", "Seasalt Coffee Latte"]);
    });

    it("filter and map by price", function () {
      const priceLessThan = bobaBeverages
        .map((tea) => tea.price)
        .filter((price) => price < 5);
      expect(priceLessThan.length).to.equal(3);
    });
  });
});

// npx mocha "JS-basics/test"
