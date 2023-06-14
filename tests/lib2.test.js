import {sub, div} from "../lib2.js";
import { test } from 'uvu';
import * as assert from 'uvu/assert';


test('should subtract and divide', () => {
  assert.is(sub(2, 3), -1);
  assert.is(div(2, 3), 2 / 3);
});

test.run();
