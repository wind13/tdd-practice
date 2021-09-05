import { example357, matchSound } from "../src/num-sound";

export const FIZZ = example357[0].val;
export const BUZZ = example357[1].val;
export const MEZZ = example357[2].val;

test('should have a map for fizz and buzz', () => {
  expect(example357[0].val).toBe(FIZZ)
  expect(example357[1].val).toBe(BUZZ)
})

test('get keys of a object, and reduce fn', () => {
  const r = example357.reduce((p, c) => p + c.val, '')
  expect(r).toBe(FIZZ + BUZZ + MEZZ)
})

test('num call correct', () => {
  expect(matchSound(example357[0], 2)).toBe('')
  expect(matchSound(example357[0], 3)).toBe(FIZZ)
  expect(matchSound(example357[0], 5)).toBe('')
  expect(matchSound(example357[1], 5)).toBe(BUZZ)
  expect(matchSound(example357[0], 13)).toBe(FIZZ)
  expect(matchSound(example357[1], 53)).toBe(BUZZ)
  expect(matchSound(example357[2], 49)).toBe(MEZZ)
  expect(matchSound(example357[2], 73)).toBe(MEZZ)
})
