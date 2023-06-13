import {sub, div} from "../lib2.js";



test('should subtract and divide', () => {
  expect(sub(2, 3)).toBe(-1);
  expect(div(2, 3)).toBe(2 / 3);
})
