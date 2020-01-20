describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });
  describe("knows when the number is", function() {
    it("divisible by 3", function() {
      expect(fizzBuzz.isDivisibleBy(3, 15)).toBe(true);
    });

    it("is not divisible by 3", function() {
      expect(fizzBuzz.isDivisibleBy(3, 16)).toBe(false);
    });

    it("is divisible by 5", function() {
      expect(fizzBuzz.isDivisibleBy(5, 5)).toBe(true);
    });

    it("is not divisible by 5", function() {
      expect(fizzBuzz.isDivisibleBy(5, 6)).toBe(false);
    });
  });

  describe("print the number, Fizz, Buzz or FizzBuzz if", function() {
    it("is divisible by 3 and 5", function() {
      expect(fizzBuzz.printFizzBuzz(15)).toMatch("FizzBuzz");
    });

    it("if divisible by 3", function() {
      expect(fizzBuzz.printFizzBuzz(3)).toMatch("Fizz");
    });

    it("if divisible by 5", function() {
      expect(fizzBuzz.printFizzBuzz(5)).toMatch("Buzz");
    });

    it("is not divisible by any", function() {
      expect(fizzBuzz.printFizzBuzz(2)).toMatch("2");
    });
  });
});
