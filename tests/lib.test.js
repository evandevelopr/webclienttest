import {add, mul} from "../lib.js";
import { test } from 'uvu';
import * as assert from 'uvu/assert';


test('should add and multiply', () => {
  assert.is(add(2, 3), 5);
  assert.is(mul(2, 3), 6);
});

test.run();
