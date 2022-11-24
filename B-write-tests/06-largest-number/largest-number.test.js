let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  let input = [3, 21, 88, 4, 36];
  let expected = 88;

  let output = getLargestNumber(input);

  expect(output).toEqual(expected);
});

test("array remains unchanged", function () {
  let input = [3, 21, 88, 4, 36];
  let expected = [3, 21, 88, 4, 36];

  let output = getLargestNumber(input);

  expect(output).toEqual(expected);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
