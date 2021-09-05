import { fizzbuzz } from "../src/fzbz";
import { example357 } from "../src/num-sound";

export const FIZZ = example357[0].val;
export const BUZZ = example357[1].val;
export const MEZZ = example357[2].val;

test('fizzbuzz testing: ', () => {
  expect(fizzbuzz(1)).toBe('1');
  expect(fizzbuzz(2)).toBe('2');
  expect(fizzbuzz(3)).toBe(FIZZ);
  expect(fizzbuzz(5)).toBe(BUZZ);
  expect(fizzbuzz(13)).toBe(FIZZ);
  expect(fizzbuzz(15)).toBe(FIZZ + BUZZ);
  expect(fizzbuzz(25)).toBe(BUZZ);
  expect(fizzbuzz(52)).toBe(BUZZ);
  expect(fizzbuzz(53)).toBe(FIZZ + BUZZ);
  expect(fizzbuzz(73)).toBe(FIZZ + MEZZ);
  expect(fizzbuzz(75)).toBe(FIZZ + BUZZ + MEZZ);
})
