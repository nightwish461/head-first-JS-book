const expect = require("chai").expect;
const arraysJS = require("../arrays.js");

describe("Function in JS test", function () {
  const bobaTeaList = [
    { name: "Milk Tea", price: 5 },
    { name: "Seasalt Coffee", price: 4.5 },
    { name: "Moonlight Mango", price: 5 },
    { name: "Seasalt Matcha Tea", price: 4.5 },
    { name: "Anteaoxidant", price: 4 },
    { name: "Seasalt Coffee Latte", price: 6 },
  ];

  describe("#mapNumbers", function () {
    it("convert array of objects to array of numbers", function () {
      var array1 = [
        { num: 3, points: 657 },
        { num: 5 },
        { num: 7 },
        { num: 9 },
        { num: 46 },
      ];
      const result = arraysJS.mapNumbers(array1);
      expect(result[0]).to.equal(3);
    });
  });

  describe("#using filter and map together", function () {
    it("first filter and map by name", function () {
      const listCoffeeTeas = bobaTeaList
        .filter((tea) => tea.name.toLowerCase().includes("coffee"))
        .map((tea) => tea.name);
      expect(listCoffeeTeas[0]).to.equal("Seasalt Coffee");
    });

    it("first map, then filter by name", function () {
      const listCoffeeTeas2 = bobaTeaList
        .map((tea) => tea.name)
        .filter((tea) => tea.toLowerCase().includes("coffee"));
      expect(listCoffeeTeas2[0]).to.equal("Seasalt Coffee");
    });

    it("filter and map by price", function () {
      const priceLessThan = bobaTeaList
        .map((tea) => tea.price)
        .filter((price) => price < 5);
      expect(priceLessThan.length).to.equal(3);
    });
  });
});

// npx mocha "JS-basics/test"
