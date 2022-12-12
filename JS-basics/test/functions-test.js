const expect = require("chai").expect;
const functionsJS = require("../functions.js");

describe("Function in JS tests", function () {
  describe("#countVowels", function () {
    it("Return the number (count) of vowels in abracadabra", function () {
      const count = functionsJS.countVowels("abracadabra");
      expect(count).to.equal(5);
    });
    it("Return the number (count) of vowels in aaaggzzzuiiiooppppp", function () {
      const count = functionsJS.countVowels("aaaggzzzuiiiooppppp");
      expect(count).to.equal(9);
    });
    it("Return the number (count) of vowels in Hello World", function () {
      const count = functionsJS.countVowels("Hello World");
      expect(count).to.equal(3);
    });
  });

  describe("#printerError", function () {
    it("Count the occurence of n-z in a string in aaabbbbhaijjjm", function () {
      const errorRate = functionsJS.printerErrorV2("aaabbbbhaijjjm");
      expect(errorRate).to.equal("0/14");
    });
    it("Count the occurence of n-z in a string in gggguuuwbbbbbbhhhhhhhhhhuuuupppzzzzzzzz", function () {
      const errorRate = functionsJS.printerErrorV2(
        "gggguuuwbbbbbbhhhhhhhhhhuuuupppzzzzzzzz"
      );
      expect(errorRate).to.equal("19/39");
    });
  });

  describe("#reverseString", function () {
    it("Reverse empty string", function () {
      const strReversed = functionsJS.reverseString("");
      expect(strReversed).to.equal("");
    });
    it("Reverse string world", function () {
      const strReversed = functionsJS.reverseString("world");
      expect(strReversed).to.equal("dlrow");
    });
    it("Reverse string 'Today is a good day'", function () {
      const strReversed = functionsJS.reverseString("Today is a good day");
      expect(strReversed).to.equal("yad doog a si yadoT");
    });
  });

  describe("#getSum", function () {
    it("Get sum between two given integers: 1, 0", function () {
      const sum = functionsJS.getSum(1, 0);
      expect(sum).to.equal(1);
    });
    it("Get sum between two given integers: 1, 2", function () {
      const sum = functionsJS.getSum(1, 2);
      expect(sum).to.equal(3);
    });
    it("Get sum between two given integers: 1, 3", function () {
      const sum = functionsJS.getSum(1, 3);
      expect(sum).to.equal(6);
    });
    it("Get sum between two given integers: 0, 1", function () {
      const sum = functionsJS.getSum(0, 1);
      expect(sum).to.equal(1);
    });
    it("Get sum between two given integers: -1, 0", function () {
      const sum = functionsJS.getSum(-1, 0);
      expect(sum).to.equal(-1);
    });
    it("Get sum between two given integers: 0, -2", function () {
      const sum = functionsJS.getSum(0, -2);
      expect(sum).to.equal(-3);
    });
    it("Get sum between two given integers: 17, -453", function () {
      const sum = functionsJS.getSum(17, -453);
      expect(sum).to.equal(-102678);
    });
  });

  describe("#growMultiply", function () {
    it("Multiply all integers in a given array: [1, 2, 3, 4]", function () {
      const product = functionsJS.growMultiply([1, 2, 3, 4]);
      expect(product).to.equal(24);
    });
    it("Multiply all integers in a given array: [1, 5, 2, 10]", function () {
      const product = functionsJS.growMultiply([1, 5, 2, 10]);
      expect(product).to.equal(100);
    });
  });
});
