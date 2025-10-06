import { capitalize, reverseString } from "./index";

test("capitalize should exist", () => {
  expect(capitalize).toBeDefined();
});

test("takes a string and returns it with the first letter character capitalized", () => {
  const testCase = [
    { string: "axe", expected: "Axe" },
    { string: "mirana", expected: "Mirana" },
    { string: "juggernaut", expected: "Juggernaut" },
  ];

  testCase.forEach((element) => {
    expect(capitalize(element.string)).toBe(element.expected);
  });
});

test("reverseString should exist", () => {
  expect(reverseString).toBeDefined();
});

test("takes a string and returns it reversed", () => {
  const testCase = [
    { string: "axe", expected: "exa" },
    { string: "mirana", expected: "anarim" },
    { string: "ursa", expected: "asru" },
  ];

  testCase.forEach((element) => {
    expect(reverseString(element.string)).toBe(element.expected);
  });
});
