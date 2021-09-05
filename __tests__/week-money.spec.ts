import { dayMoney, remainder, recursionSumMoney, formulaSumMoney } from "../src/week-money";

test('test remainder', () => {
  expect(remainder(1)).toBe(1);
  expect(remainder(4)).toBe(4);
  expect(remainder(7)).toBe(7);
  expect(remainder(8)).toBe(1);
  expect(remainder(12)).toBe(5);
  expect(remainder(14)).toBe(7);
})

test('day money correct', () => {
  expect(dayMoney(1)).toBe(1)
  expect(dayMoney(4)).toBe(4)
  expect(dayMoney(7)).toBe(7)
  expect(dayMoney(8)).toBe(2)
  expect(dayMoney(14)).toBe(8)
})

test('week money sum correct', () => {
  expect(recursionSumMoney(1)).toBe(1)
  expect(recursionSumMoney(4)).toBe(10)
  expect(recursionSumMoney(5)).toBe(15)
  expect(recursionSumMoney(7)).toBe(28)
  expect(recursionSumMoney(10)).toBe(37)
  expect(recursionSumMoney(20)).toBe(96)
  expect(recursionSumMoney(30)).toBe(165)
})

test.only('week money formula sum correct', () => {
  expect(formulaSumMoney(1)).toBe(1)
  expect(formulaSumMoney(2)).toBe(3)
  expect(formulaSumMoney(3)).toBe(6)
  expect(formulaSumMoney(4)).toBe(10)
  expect(formulaSumMoney(5)).toBe(15)
  expect(formulaSumMoney(7)).toBe(28)
  expect(formulaSumMoney(10)).toBe(37)
  expect(formulaSumMoney(20)).toBe(96)
  expect(formulaSumMoney(30)).toBe(165)
})
