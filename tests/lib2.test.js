import {sub, div} from "../lib2.js";
import { test } from 'uvu';
import * as assert from 'uvu/assert';


test('should subtract and divide', () => {
  assert.is(sub(2, 3), -1);


  console.log(`typeof performance = ${(typeof performance)}`);

  if (typeof performance !== "undefined") {
    console.log(`performance.now() ${performance.now()}`);
    console.log(`Date.now() ${Date.now()}`);
  }

  assert.is(div(2, 3), 2 / 3);
});

test.run();
