var FizzBuzz = function() {};

FizzBuzz.prototype.isDivisibleBy3 = function(number) {
  return number % 3 === 0;
};

FizzBuzz.prototype.isDivisibleBy5 = function(number) {
  return number % 5 === 0;
};
