import { fizzbuzz } from "../src/fizzbuzz";

export const FIZZ = 'Fizz';
export const BUZZ = 'Buzz';

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
})
