import {add, mul} from "../lib.js";



test('should add and multiply', () => {
  expect(add(2, 3)).toBe(5);
  expect(mul(2, 3)).toBe(6);
})
