import { fizzbuzz, mapNumCall } from "../src/fzbz";
import { maps } from "../src/num-call";

export const FIZZ = maps[0].val;
export const BUZZ = maps[1].val;
export const MEZZ = maps[2].val;

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

test('should have a map for fizz and buzz', () => {
  expect(maps[0].val).toBe(FIZZ)
  expect(maps[1].val).toBe(BUZZ)
})

test('get keys of a object, and reduce fn', () => {
  const r = maps.reduce((p, c) => p + c.val, '')
  expect(r).toBe(FIZZ + BUZZ + MEZZ)
})

test('num call correct', () => {
  expect(mapNumCall(maps[0], 2)).toBe('')
  expect(mapNumCall(maps[0], 3)).toBe(FIZZ)
  expect(mapNumCall(maps[0], 5)).toBe('')
  expect(mapNumCall(maps[1], 5)).toBe(BUZZ)
  expect(mapNumCall(maps[0], 13)).toBe(FIZZ)
  expect(mapNumCall(maps[1], 53)).toBe(BUZZ)
})
