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
});
