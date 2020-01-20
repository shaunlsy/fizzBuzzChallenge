describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });
  describe("knows when the number is", function() {
    it("divisible by 3", function() {
      expect(fizzBuzz.isDivisibleBy3(15)).toBe(true);
    });

    it("is not divisible by 3", function() {
      expect(fizzBuzz.isDivisibleBy3(16)).toBe(false);
    });

    it("is divisible by 5", function() {
      expect(fizzBuzz.isDivisibleBy5(5)).toBe(true);
    });

    it("is not divisible by 5", function() {
      expect(fizzBuzz.isDivisibleBy5(6)).toBe(false);
    });
  });
});
