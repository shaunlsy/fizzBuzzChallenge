var FizzBuzz = function() {};

// FizzBuzz.prototype.isDivisibleBy3 = function(number) {
//   return number % 3 === 0;
// };

// FizzBuzz.prototype.isDivisibleBy5 = function(number) {
//   return number % 5 === 0;
// };

FizzBuzz.prototype.isDivisibleBy = function(divisor, number) {
  return number % divisor === 0;
};

FizzBuzz.prototype.printFizzBuzz = function(number) {
  if (this.isDivisibleBy(15, number)) {
    return "FizzBuzz";
  } else if (this.isDivisibleBy(5, number)) {
    return "Buzz";
  } else if (this.isDivisibleBy(3, number)) {
    return "Fizz";
  } else {
    return number.toString();
  }
};

FizzBuzz.prototype.print1To100 = function() {
  for (let i = 0; i <= 100; i++) {
    console.log(this.printFizzBuzz(i));
  }
};
