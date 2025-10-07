import { capitalize, reverseString, calculator } from "./index";
import { caesarCipher } from "./caesarCipher";

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

test("calculator object with function for add,subtract,divide, and multiply should exist", () => {
  expect(calculator).toBeDefined();
  expect(calculator.add).toBeDefined();
  expect(calculator.subtract).toBeDefined();
  expect(calculator.divide).toBeDefined();
  expect(calculator.multiply).toBeDefined();
});

test("calculator.add, a function that takes two numbers and return the sum of it", () => {
  expect(calculator.add(1, 1)).toBe(2);
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(0, 0)).toBe(0);
});

test("calculator.subtract, a function that takes two numbers and returns their difference", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
  expect(calculator.subtract(0, 1)).toBe(-1);
});

test("calculator.divide, a function that takes two numbers and returns their qoutient", () => {
  expect(calculator.divide(2, 2)).toBe(1);
  expect(calculator.divide(8, 4)).toBe(2);
  expect(calculator.divide(100, 5)).toBe(20);
});

test("calculator.multiply, a funciton that takes 2 numbers and returns their product", () => {
  expect(calculator.multiply(12, 12)).toBe(144);
  expect(calculator.multiply(1, 0)).toBe(0);
  expect(calculator.multiply(2, 2)).toBe(4);
});

test("caesarCipher should exist", () => {
  expect(caesarCipher).toBeDefined();
});

test("caesarCipher('xyz', 3) should return 'abc'", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesarCipher('HeLLo', 3) should return 'KhOOr'", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("caesarCipher('Hello, World!', 3) should return 'Khoor, Zruog!'", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
