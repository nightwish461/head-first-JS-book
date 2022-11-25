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

  describe("#processArray", function () {
    it("Convert when string is empty", function () {
      const stringOutput = arraysJS.processArray("");
      expect(stringOutput).to.equal("Error: String is empty");
    });

    it("Convert string '334' to its spelled representation", function () {
      const stringOutput = arraysJS.processArray("334");
      expect(stringOutput).to.equal(" two three one four");
    });

    it("Convert '32333922' string to its spelled representation", function () {
      const stringOutput = arraysJS.processArray("32333922");
      expect(stringOutput).to.equal(
        " one three one two three three one nine two two"
      );
    });
    it("Convert '00020022' string to its spelled representation", function () {
      const stringOutput = arraysJS.processArray("00020022");
      expect(stringOutput).to.equal(" three zero one two two zero two two");
    });
    it("Convert '99190' string to its spelled representation", function () {
      const stringOutput = arraysJS.processArray("99190");
      expect(stringOutput).to.equal(" two nine one one one nine one zero");
    });
    it("Convert '555554478' string to its spelled representation", function () {
      const stringOutput = arraysJS.processArray("555554478");
      expect(stringOutput).to.equal(" five five two four one seven one eight");
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
