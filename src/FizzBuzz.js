var FizzBuzz = function() {};

FizzBuzz.prototype.isDivisibleBy3 = function(number) {
  return number % 3 === 0;
};

FizzBuzz.prototype.isDivisibleBy5 = function(number) {
  return number % 5 === 0;
};

FizzBuzz.prototype.printFizzBuzz = function(number) {
  if (this.isDivisibleBy5(number) && this.isDivisibleBy3(number)) {
    return 'FizzBuzz';
  } else if (this.isDivisibleBy5(number)) {
    return 'Buzz';
  } else if (this.isDivisibleBy3(number)) {
    return 'Fizz';
  } else {
    return number.toString();
  }
};