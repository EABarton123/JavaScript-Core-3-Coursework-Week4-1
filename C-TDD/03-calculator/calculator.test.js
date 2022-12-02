let add = require("./calculator");

test("returns 0 if input ''", function () {
  let input = "";
  let expected = 0;
  let output = add(input);

  expect(output).toEqual(expected);
});

test("returns 5 if input '5'", function () {
  let input = "5";
  let expected = 5;
  let output = add(input);

  expect(output).toEqual(expected);
});

test("returns 9 if input '6, 3'", function () {
  let input = "6, 3";
  let expected = 9;
  let output = add(input);

  expect(output).toEqual(expected);
});

test("allows unlimited numbers in string input 9", function () {
  let input = "6, 3, 1, 5, 8, 10, 77";
  let expected = 110;
  let output = add(input);

  expect(output).toEqual(expected);
});
