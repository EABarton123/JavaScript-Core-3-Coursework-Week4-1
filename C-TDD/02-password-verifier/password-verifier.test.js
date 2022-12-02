let verify = require("./password-verifier");

test("returns password rejected if less than 8 characters", function () {
  let input = "Ghy";
  let expected = "Password rejected";
  let output = verify(input);

  expect(output).toEqual(expected);
});

test("returns password rejected if null", function () {
  let input = null;
  let expected = "Password rejected";
  let output = verify(input);

  expect(output).toEqual(expected);
});

test("returns password rejected if no capital letters", function () {
  let input = "dfgghkhhfch3gg";
  let expected = "Password rejected";
  let output = verify(input);

  expect(output).toEqual(expected);
});

test("returns password rejected if no numbers", function () {
  let input = "Bdhhfjfkfjkhfhgjfgh";
  let expected = "Password rejected";
  let output = verify(input);

  expect(output).toEqual(expected);
});

test("returns password accepted if meets requirements", function () {
  let input = "Bhffurjkj2hjfhf";
  let expected = "Password accepted";
  let output = verify(input);

  expect(output).toEqual(expected);
});
