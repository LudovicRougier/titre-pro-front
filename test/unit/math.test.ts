function sum(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

test("sum adds two numbers correctly", () => {
  expect(sum(1, 2)).toBe(3);
});

test("subtract subtracts two numbers correctly", () => {
  expect(subtract(5, 2)).toBe(3);
});
